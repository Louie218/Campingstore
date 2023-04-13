import Logo from "../assets/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between shadow-lg">
      <Link to="/" className="flex items-center">
        <img className="w-12 rounded-full m-2" src={Logo} alt="logo" />
        <h1 className="text-lg font-bold ">Golden View</h1>
      </Link>
      <nav className="flex ">
        <Link
          to="/shop"
          className="mx-2 text-lg font-bold hover:text-gray-300 cursor-pointer"
          end
        >
          Shop
        </Link>
        <HashLink
          to="/#aboutus"
          className="mx-2 text-lg font-bold hover:text-gray-300 cursor-pointer"
        >
          About Us
        </HashLink>
        <HashLink
          to="/#contact"
          className="ml-2 mr-4 text-lg font-bold hover:text-gray-300 cursor-pointer"
        >
          Contact
        </HashLink>
        <HashLink className="flex justify-center items-center mr-6">
          <FaShoppingCart />
        </HashLink>
      </nav>
    </header>
  );
}
