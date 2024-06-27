import { useContext } from "react";
import { ShoppingCartContext } from "../App";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Button from "./Button";

const Cart = ({ visible }) => {
  const { cartProducts, setCartProducts } = useContext(ShoppingCartContext);

  const incrementHandler = (productId) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };

  const decrementHandler = (productId) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((product) => {
        if (product.id === productId) {
          if (product.quantity === 1) {
            return { ...product };
          } else {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        return product;
      });
    });
  };

  const handleDelete = (productId) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.filter((product) => product.id !== productId);
    });
  };

  return (
    <div
      className={`pt-20 pb-10 pl-10 z-40 bg-pale-blue max-sm:w-full sm:w-full md:w-[75%]  lg:w-[50%] xl:w-[40%] fixed right-0 top-0  h-dvh ${
        visible ? "visible " : "hidden "
      }`}
    >
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="overflow-y-scroll cart-height">
        <ul>
          {cartProducts.map((product) => (
            <li
              key={product.id}
              className="grid grid-cols-5 items-center justify-center py-2 border-b-2"
            >
              <img
                src={product.imgURL}
                alt={`${product.name} image`}
                className="w-20"
              />
              <span className="flex flex-1 m-2">{product.name}</span>
              <span className="flex flex-1 text-lg m-2 font-montserrat font-semibold text-coral-red ">
                ${parseFloat(product.price.replace("$", "") * product.quantity)}
              </span>
              <span className="flex flex-1 items-center justify-center m-2">
                <button>
                  <FaMinus
                    onClick={() => {
                      decrementHandler(product.id);
                    }}
                  />
                </button>
                <span className="px-2 ">{product.quantity}</span>
                <button>
                  <FaPlus
                    onClick={() => {
                      incrementHandler(product.id);
                    }}
                  />
                </button>
              </span>
              <button className="m-2 flex items-center justify-center">
                <FaTrash
                  className="size-8 text-coral-red"
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
        {cartProducts.length > 0 && (
          <div className="flex flex-1">
            <span className="flex flex-1 m-2 text-xl font-montserrat font-semibold items-center justify-center">
              Total :{" "}
            </span>
            <span className="flex flex-1 m-5 text-xl font-montserrat font-semibold text-coral-red items-center justify-center">
              $
              {cartProducts.reduce((acc, product) => {
                const price = parseFloat(
                  product.price.replace("$", "") * product.quantity
                );
                return acc + price;
              }, 0)}
            </span>
          </div>
        )}
        <div className="w-full flex justify-center my-5">
          {cartProducts.length > 0 && (
            <a href="/" target="_blank">
              <Button label={"Confirm Order"} />
            </a>
          )}
          {cartProducts.length === 0 && (
            <h1 className="w-full text-xl font-montserrat font-semibold mt-20 flex justify-center">
              Cart is empty
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
