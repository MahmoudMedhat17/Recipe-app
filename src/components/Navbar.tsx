import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="px-10 md:px-5 lg:px-2 py-4 md:py-10">
      <nav className="flex">
        <Link to="/">
          <img src="logo.jpg" className="w-20 md:w-24 h-20 md:h-24" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
