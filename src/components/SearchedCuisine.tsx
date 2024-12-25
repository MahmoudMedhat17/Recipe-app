import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const SearchedCuisine = () => {
  const [searchRes, setSearchRes] = useState([]);
  const { userQuery } = useParams();

  useEffect(() => {
    const fetchSearchedCuisines = async () => {
      try {
        const getSearchRes = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${userQuery}&number=9`
        );
        const response = getSearchRes.data;
        setSearchRes(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedCuisines();
  }, [userQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 pt-10">
      {searchRes?.results?.map((item) => (
        <div key={item.id} className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-sm md:text-lg text-center">
            {item.title}
          </h3>
          <img src={item.image} className="rounded-lg cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default SearchedCuisine;
