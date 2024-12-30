import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import { itemsProps } from "@/types";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const Cuisines = () => {
  const [cuisinesState, setCuisinesState] = useState([]);
  const [error, setError] = useState(false);
  const cuisineParams = useParams();

  const getCuisines = async (name: string) => {
    try {
      const cuisineData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${API_KEY}`
      );
      const response = await cuisineData.data.results;
      setCuisinesState(response);
      console.log(response);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
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
      {error ? (
        <>
          <h2 className="text-xl font-bold py-10">
            {cuisineParams?.cuisineType} Cuisine
          </h2>
          <h3 className="text-center font-semibold text-xl">
            Sorry the data is not available.
          </h3>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 place-items-center">
          {cuisinesState?.map((item: itemsProps) => (
            <Link to={`/cuisine/${item.id}`}>
              <div
                key={item.id}
                className="py-10 relative cursor-pointer hover:scale-105 duration-300 w-80 sm:w-60 md:w-80"
              >
                <h3 className="px-2 absolute w-full text-center text-sm z-10 text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {item.title}
                </h3>
                <img
                  src={item.image}
                  className="w-80 sm:w-60 md:w-80 shadow-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cuisines;
