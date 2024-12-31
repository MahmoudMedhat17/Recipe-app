import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { itemsProps } from "@/types";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const SearchedCuisine = () => {
  const [searchRes, setSearchRes] = useState([]);
  const [error, setError] = useState(false);
  const { userQuery } = useParams();

  useEffect(() => {
    const fetchSearchedCuisines = async () => {
      try {
        const getSearchRes = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${userQuery}&number=9`
        );
        const response = getSearchRes.data?.results;
        setSearchRes(response);
        console.log(response);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchSearchedCuisines();
  }, [userQuery]);

  return (
    <>
      {error ? (
        <h3 className="text-center font-semibold text-xl">
          Sorry the recipe is not available.
        </h3>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-10 place-items-center">
            {searchRes?.map((item: itemsProps) => (
              <Link key={item.id} to={`/cuisine/${item.id}`}>
                <div className="cursor-pointer relative flex flex-col items-center hover:scale-105 duration-300 w-80 sm:w-60 md:w-80">
                  <h3 className="px-2 absolute w-full text-center text-sm z-10 text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {item.title}
                  </h3>
                  <div className="absolute bg-black/30 w-full h-full"></div>
                  <img
                    src={item.image}
                    className="w-80 sm:w-60 md:w-80 shadow-lg"
                  />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchedCuisine;
