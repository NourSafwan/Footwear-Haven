import { useEffect } from "react";
import {
  CustomerReviews,
  Footer,
  Services,
  SuperQuality,
} from "../sections";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SuperQuality />
      <Services />
      <CustomerReviews />

      <Footer />
    </>
  );
};

export default AboutUsPage;
