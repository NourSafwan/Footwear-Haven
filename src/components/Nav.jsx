import { hamburger } from "../assets/icons";
import { navLinks } from "./../constants";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { ShoppingCartContext } from "../App";
import Cart from "./Cart";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const [toggleCart, setToggleCart] = useState(false);
  const { cartProducts } = useContext(ShoppingCartContext);

  return (
    <header className="padding-x py-8 absolute w-full z-30">
      <nav className="flex justify-between items-center max-container">
        <Link to="/" className="flex items-center justify-center">
          <GiRunningShoe className="text-coral-red size-14 p-2" />{" "}
          <span className="text-coral-red font-montserrat font-semibold text-lg tracking-tighter">
            Footwear Haven
          </span>
        </Link>
        <ul className={`myNav ${toggleNav ? "max-lg:hidden " : "navBg"}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="z-20 relative">
          <button
            className="border-2 p-3 rounded-full bg-white text-coral-red mx-3 shadow-lg hover:border-coral-red transition duration-300 ease-in-out "
            onClick={() => setToggleCart(!toggleCart)}
          >
            <FaCartShopping size={29} />
          </button>
          <div className={`absolute -bottom-2.5 left-2 bg-white border-2 p-1 rounded-full w-7 h-7 flex items-center justify-center ${cartProducts.length > 0 ? "border-coral-red" : ""} transition duration-300 ease-in-out`}>
            {cartProducts.length}
          </div>
        </div>
        <div>
          <IoClose
            className={`size-10 cursor-pointer ${
              toggleCart ? "fixed" : "hidden"
            } top-8 right-10 z-50 `}
            onClick={() => setToggleCart(!toggleCart)}
          />
        </div>

        <Cart visible={toggleCart} />

        <div
          className={`fixed z-30 top-0 right-0 w-[100%] h-[100%] bg-[#000000bb] ${
            toggleCart ? "fixed" : "hidden"
          }`}
        ></div>

        <div className="z-30">
          {toggleNav && (
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              className={`lg:hidden cursor-pointer`}
              onClick={() => setToggleNav(!toggleNav)}
            />
          )}
          {!toggleNav && (
            <IoClose
              className={`lg:hidden size-10 cursor-pointer ${
                !toggleNav && "fixed"
              } top-8 right-10 z-50 `}
              onClick={() => setToggleNav(!toggleNav)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
