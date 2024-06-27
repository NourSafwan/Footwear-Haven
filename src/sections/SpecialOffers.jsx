import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container padding fade-scroll">
      <div className="flex-1 ">
        <img src={offer} alt="offer" className="object-contain" />
      </div>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text  mb-10">
          We make sure our products are of the highest quality. We only use high
          quality materials in our products.
        </p>
        <Button
          label="Shop now"
          iconURL={arrowRight}
          onClick={() => window.location.replace("/#products")}
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
