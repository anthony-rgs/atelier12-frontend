import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Products } from "@/pages/Products";
import { ProductDetail } from "@/pages/ProductDetail";
import { Gallery } from "@/pages/Gallery";
import { PdfExport } from "@/pages/PdfExport";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="products"
          element={<Products />}
        />
        <Route
          path="products/:slug"
          element={<ProductDetail />}
        />
        <Route
          path="galery"
          element={<Gallery />}
        />
        <Route
          path="pdf"
          element={<PdfExport />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}
