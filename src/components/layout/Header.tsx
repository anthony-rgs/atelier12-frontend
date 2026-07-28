import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PageContainer } from "./PageContainer";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/products", label: "Produits" },
  { to: "/galery", label: "Galerie" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/60 bg-paper/70 backdrop-blur-xl backdrop-saturate-150">
      <PageContainer className="flex h-16 items-center justify-between md:h-20">
        <NavLink
          to="/"
          className="shrink-0 font-display text-xl italic text-ink md:text-2xl"
          onClick={() => setOpen(false)}
        >
          L'Atelier
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-mono text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                  isActive ? "text-primary" : "text-ink-soft hover:text-ink",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </PageContainer>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <PageContainer className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "border-b border-line py-4 font-mono text-sm font-medium uppercase tracking-[0.14em]",
                      isActive ? "text-primary" : "text-ink-soft",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </PageContainer>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
