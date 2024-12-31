import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <header className="px-10 md:px-5 lg:px-2 py-4 md:py-10">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img
            src="logo.png"
            className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-white rounded-md"
          />
        </Link>
        <Darkmode />
      </nav>
    </header>
  );
};

export default Navbar;
        