import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ingridientsProps } from "@/types";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const CuisineCard = () => {
  const { cuisineId } = useParams();
  const [ingredients, setIngredients] = useState([]);

  console.log(cuisineId);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const ingredientsData = await axios.get(
          `https://api.spoonacular.com/recipes/${cuisineId}/information?apiKey=${API_KEY}&includeNutrition=false`
        );
        const response = ingredientsData.data.extendedIngredients;
        setIngredients(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getIngredients();
  }, [cuisineId]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ingredients?.map((item: ingridientsProps) => (
          <div key={item.id} className="px-8 py-4">
            <div className="flex items-center w-full gap-4">
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                className="w-14 h-14"
              />
              <h3 className="font-medium text-sm md:text-lg">
                {item.original}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CuisineCard;
