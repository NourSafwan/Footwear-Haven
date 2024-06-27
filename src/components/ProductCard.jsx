import { Link } from "react-router-dom";
import { star } from "../assets/icons";

const ProductCard = ({ id, imgURL, name, price, rate }) => {
  return (
    <Link to={`/Product/${id}`} className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer hover:shadow-lg hover:bg-pale-blue transition duration-300 ease-in-out p-2 pb-4 rounded-xl items-center fade-scroll">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] object-cover rounded-lg "
      />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rate}
        </p>
      </div>
      <h3 className="text-2xl font-palanquin font-semibold mt-2 leading-normal">
        {name}
      </h3>
      <p className="text-lg mt-2 font-montserrat font-semibold text-coral-red">
        {price}
      </p>
    </Link>
  );
};

export default ProductCard;
