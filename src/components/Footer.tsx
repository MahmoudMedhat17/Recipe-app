import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const yearlyDate = date.getFullYear();

  return (
    <section className="pt-10 px-10 md:px-5 lg:px-2">
      <div className="flex justify-between items-center py-10">
        <div className="w-1/2">
          <img src="/logo.jpg" className="w-24 h-24" />
          <p className="font-medium text-xs sm:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde esse
            praesentium hic libero eveniet odio tenetur architecto natus.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link to="">
            <FaInstagram className="size-6 sm:size-8 hover:text-orange-500 duration-300" />
          </Link>
          <Link to="https://www.facebook.com/mahmoud.medhat.7524/">
            <FaFacebook className="size-6 sm:size-8 hover:text-orange-500 duration-300" />
          </Link>
          <Link to="www.linkedin.com/in/mahmoud-medhat-84166a205">
            <FaLinkedin className="size-6 sm:size-8 hover:text-orange-500 duration-300" />
          </Link>
        </div>
      </div>
      <p className="text-center text-xs sm:text-lg">
        Copyright © {yearlyDate} by{" "}
        <span className="text-orange-500 font-bold">Mahmoud Medhat</span>
      </p>
    </section>
  );
};

export default Footer;
