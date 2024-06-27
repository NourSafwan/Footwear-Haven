import { Footer } from "../sections";
import { allProducts } from "../constants";
import { useParams } from "react-router-dom";
import { star } from "../assets/icons";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../App";
import toast, { Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

const Product = () => {
  const productId = useParams().id;
  const product = allProducts.filter((product) => product.id == productId)[0];
  const { setCartProducts } = useContext(ShoppingCartContext);

  const addToCart = () => {
    setCartProducts((prevCartProducts) => {
      if (prevCartProducts.find((p) => p.id === product.id)) {
        return prevCartProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prevCartProducts,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notify = () =>
    toast((t) => (
      <div className="relative flex ">
        <FaRegCheckCircle className="absolute -left-7" />
        <span>Added successfully</span>
        <button className="absolute -top-2.5 -right-7">
          <IoClose onClick={() => toast.dismiss(t.id)} />
        </button>
      </div>
    ));

  return (
    <>
      <div className="flex justify-between items-center max-xl:flex-col-reverse  gap-10 w-full max-container mx-auto px-20 py-32">
        <div>
          <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-2xl leading-normal text-slate-gray">
              {product.rate}
            </p>
          </div>
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-coral-red">
            {product.name}
          </h2>
          <div className="flex flex-col flex-1">
            <h3 className="text-2xl mt-2 font-montserrat font-bold pt-10">
              Description :
            </h3>
            <p className="mt-4  xl:max-w-lg info-text ">
              {product.description}
            </p>
          </div>
          <div className="flex flex-1 justify-center gap-10 items-center">
            <h3 className="text-2xl mt-2 font-montserrat font-bold pt-10">
              Price :
            </h3>
            <p className="text-lg mt-2 font-montserrat font-bold pt-10 text-coral-red">
              {product.price}
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              className="btn1 font-semibold mt-10 w-72"
              onClick={() => {
                addToCart();
                notify();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={product.imgURL}
            alt="shoe"
            width={570}
            height={522}
            className="abject-contain "
          />
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "toast",
          style: {},
        }}
      />
      <Footer />
    </>
  );
};

export default Product;
