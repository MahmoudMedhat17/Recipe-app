import CuisineInfo from "@/components/CuisineInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import { itemsProps } from "@/types";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const Cuisines = () => {
  const [cuisinesState, setCuisinesState] = useState([]);
  const cuisineParams = useParams();

  const getCuisines = async (name: string) => {
    try {
      const cuisineData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${API_KEY}`
      );
      const response = await cuisineData.data;
      setCuisinesState(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cuisineParams?.cuisineType) {
      getCuisines(cuisineParams.cuisineType);
    }
    console.log(cuisineParams);
    console.log(cuisinesState);
  }, [cuisineParams]);

  return (
    <div className="px-10 md:px-5 lg:px-2">
      <SearchBar />
      <Categories />
      <h2 className="text-xl font-bold py-10">
        {cuisineParams?.cuisineType} Cuisine
      </h2>
      <Link to="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {cuisinesState.results?.map((item: itemsProps) => (
            <div
              key={item.id}
              className="py-10 relative cursor-pointer hover:scale-105 duration-300"
            >
              <h3 className="absolute w-full text-center text-sm z-10 text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {item.title}
              </h3>
              <div className="absolute bg-black/20 w-full h-full"></div>
              <img src={item.image} className="w-80 shadow-lg" />
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Cuisines;
