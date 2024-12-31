import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 pt-20">
      <NavLink
        to="/cuisines/Italian"
        className={({ isActive }: { isActive: boolean }) =>
          `flex flex-col items-center justify-center gap-2 cursor-pointer w-16 sm:w-20 h-16 sm:h-20 rounded-full hover:bg-orange-500 hover:duration-200 ${
            isActive ? "bg-orange-500" : "bg-gray-700/80"
          }`
        }
      >
        <FaPizzaSlice color="white" />
        <p className="font-medium text-white text-[8px] sm:text-xs">Italian</p>
      </NavLink>
      <NavLink
        to="/cuisines/American"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center gap-2 cursor-pointer w-16 sm:w-20 h-16 sm:h-20 rounded-full hover:bg-orange-500 hover:duration-200 ${
            isActive ? "bg-orange-500" : "bg-gray-700/80"
          }`
        }
      >
        <FaHamburger color="white" />
        <p className="font-medium text-white text-[8px] sm:text-xs">American</p>
      </NavLink>
      <NavLink
        to="/cuisines/Korean"
        className={({ isActive }: { isActive: boolean }) =>
          `flex flex-col items-center justify-center gap-2 cursor-pointer bg-gray-700/80 w-16 sm:w-20 h-16 sm:h-20 rounded-full hover:bg-orange-500 hover:duration-200 ${
            isActive ? "bg-orange-500" : "bg-gray-700/80"
          }`
        }
      >
        <GiNoodles color="white" />
        <p className="font-medium text-white text-[8px] sm:text-xs">Korean</p>
      </NavLink>
      <NavLink
        to="/cuisines/Japanese"
        className={({ isActive }: { isActive: boolean }) =>
          `flex flex-col items-center justify-center gap-2 cursor-pointer bg-gray-700/80 w-16 sm:w-20 h-16 sm:h-20 rounded-full hover:bg-orange-500 hover:duration-200 ${
            isActive ? "bg-orange-500" : "bg-gray-700/80"
          }`
        }
      >
        <GiChopsticks color="white" />
        <p className="font-medium text-white text-[8px] sm:text-xs">Japanese</p>
      </NavLink>
    </div>
  );
};

export default Categories;
