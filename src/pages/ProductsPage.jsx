import { useEffect } from "react";
import { Footer, AllProducts } from "../sections";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AllProducts />
      <Footer />
    </>
  );
};

export default ProductsPage;
