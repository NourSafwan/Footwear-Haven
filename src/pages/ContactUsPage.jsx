import { useEffect } from "react";
import { Footer, Subscribe } from "../sections";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Subscribe />
      <Footer />
    </>
  );
};

export default ContactUsPage;
