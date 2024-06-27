import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { popularProducts } from "../constants";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 padding fade-scroll"
    >
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-3xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-gray lg:max-w-lg mt-2 font-montserrat">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-6 mt-8">
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4">
            {popularProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
          <Link to="/Products">
            <button className="bg-coral-red text-white font-bold py-3 rounded-lg w-full hover:bg-white hover:text-coral-red border border-coral-red mt-8 transition duration-300 ease-in-out">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
