import ProductCard from "../components/ProductCard";
import { allProducts } from "../constants";
import { useEffect, useState } from "react";

const sortProducts = (sortBy, sortOrder) => {
  let sortedProducts = [...allProducts];
  if (sortBy === "rate") {
    sortedProducts.sort((a, b) => {
      const rateA = parseFloat(a.rate);
      const rateB = parseFloat(b.rate);
      return sortOrder === "asc" ? rateA - rateB : rateB - rateA;
    });
  } else if (sortBy === "price") {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }
  return sortedProducts;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AllProducts = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sortedProducts = sortBy ? sortProducts(sortBy, sortOrder) : allProducts;

  return (
    <section id="products" className="max-container  padding max-sm:pt-28 ">
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-3xl font-bold">
          <span className="text-coral-red">All</span> Products
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          className={`btn1`}
          onClick={() => {
            setSortBy("rate");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Sort by Rate {sortBy === "rate" && (sortOrder === "asc" ? "▲" : "▼")}
        </button>
        <button
          className={`btn1`}
          onClick={() => {
            setSortBy("price");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
        >
          Sort by Price{" "}
          {sortBy === "price" && (sortOrder === "asc" ? "▲" : "▼")}
        </button>
      </div>
      <div>
        <div className="flex flex-col gap-6 mt-8 ">
          <div className="mt- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4 ">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      {scrollPosition > 300 && (
        <button
          className="btn1 right-5 bottom-5 fixed h-16 w-16"
          onClick={scrollTop}
        >
          ▲
        </button>
      )}
    </section>
  );
};

export default AllProducts;
