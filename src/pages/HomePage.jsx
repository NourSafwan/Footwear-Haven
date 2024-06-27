import { useEffect } from "react";
import { Footer, Hero, PopularProducts, SpecialOffers } from "../sections";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />

      <PopularProducts />

      <SpecialOffers />

      <Footer />
    </>
  );
};

export default HomePage;
