import { useEffect, useRef, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { toPng } from "html-to-image";
import { getPrices } from "@/services/api";
import type { PriceCategory, PriceLine } from "@/types/price";
import { PricesPdfDocument } from "@/components/pdf/PricesPdfDocument";
import { PricesImageTemplate } from "@/components/pdf/PricesImageTemplate";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useIsDesktop } from "@/hooks/useMediaQuery";

async function downloadPricesPdf(category: PriceCategory, lines: PriceLine[]) {
  const blob = await pdf(
    <PricesPdfDocument
      category={category}
      lines={lines}
    />,
  ).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `tarifs-${category}-latelier12.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}

// On mobile, a PDF lands in the Files app — much less discoverable than an image, which the
// native share sheet can save straight to Photos. So mobile gets a PNG instead, shared via
// the Web Share API when available (falls back to a plain download if not).
async function sharePricesImage(category: PriceCategory, node: HTMLElement) {
  const dataUrl = await toPng(node, { pixelRatio: 2, backgroundColor: "#ffffff" });
  const blob = await (await fetch(dataUrl)).blob();
  const fileName = `tarifs-${category}-latelier12.png`;
  const file = new File([blob], fileName, { type: "image/png" });

  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({ files: [file], title: `Tarifs ${category} — L'Atelier 12` });
    return;
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

export function PdfExport() {
  usePageMeta({ title: "Export des tarifs", noIndex: true });
  const isDesktop = useIsDesktop();

  const [womenPrices, setWomenPrices] = useState<PriceLine[]>([]);
  const [menPrices, setMenPrices] = useState<PriceLine[]>([]);
  const [downloading, setDownloading] = useState<PriceCategory | null>(null);

  const womenImageRef = useRef<HTMLDivElement>(null);
  const menImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPrices("femme").then(setWomenPrices);
    getPrices("homme").then(setMenPrices);
  }, []);

  async function handleDownload(category: PriceCategory, lines: PriceLine[]) {
    setDownloading(category);
    try {
      if (isDesktop) {
        await downloadPricesPdf(category, lines);
      } else {
        const node = category === "femme" ? womenImageRef.current : menImageRef.current;
        if (node) await sharePricesImage(category, node);
      }
    } finally {
      setDownloading(null);
    }
  }

  return (
    <PageContainer className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-16 md:min-h-[calc(100dvh-5rem)]">
      <Heading variant="eyebrow">Espace pro</Heading>
      <Heading
        variant="h1"
        className="mt-4"
      >
        Exporter les tarifs
      </Heading>
      <Text
        variant="lead"
        className="mt-4 max-w-md"
      >
        {isDesktop
          ? "Télécharge la grille tarifaire actuelle en PDF, prête à imprimer ou partager (générée à partir des tarifs à jour)"
          : "Enregistre la grille tarifaire actuelle en image, prête à partager (générée à partir des tarifs à jour)"}
      </Text>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button
          onClick={() => handleDownload("femme", womenPrices)}
          disabled={womenPrices.length === 0 || downloading === "femme"}
        >
          {downloading === "femme"
            ? "Génération…"
            : isDesktop
              ? "Télécharger — Tarifs Femme"
              : "Enregistrer — Tarifs Femme"}
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleDownload("homme", menPrices)}
          disabled={menPrices.length === 0 || downloading === "homme"}
        >
          {downloading === "homme"
            ? "Génération…"
            : isDesktop
              ? "Télécharger — Tarifs Homme"
              : "Enregistrer — Tarifs Homme"}
        </Button>
      </div>

      {/* Off-screen, real HTML, rasterized to PNG for the mobile share flow above. */}
      <div className="fixed left-[-9999px] top-0" aria-hidden>
        <PricesImageTemplate ref={womenImageRef} category="femme" lines={womenPrices} />
        <PricesImageTemplate ref={menImageRef} category="homme" lines={menPrices} />
      </div>
    </PageContainer>
  );
}
