import axios from "axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { itemsProps } from "@/types";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState<itemsProps[]>([]);

  useEffect(() => {
    const getPopularRecipes = async () => {
      try {
        // Get Stored data in LocalStorage
        const checkLs = localStorage.getItem("popular");

        // If data exists then don't fetch the data from the API and get it from the cache
        if (checkLs) {
          setPopularRecipes(JSON.parse(checkLs));
        }
        // If not then fetch the data from the API that prevents from calling the API on every render
        else {
          const popularData = await axios.get(
            `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY}`
          );
          const response = popularData.data?.recipes;
          setPopularRecipes(response);
          // This line set the data from the API and set it to the localStorage
          localStorage.setItem("popular", JSON.stringify(response));
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPopularRecipes();
  }, []);

  return (
    <div className="px-10 md:px-5 xl:px-0 space-y-4">
      <h3 className="font-bold text-lg">Popular Picks</h3>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="gap-10">
          {Array.isArray(popularRecipes) &&
            popularRecipes?.map((item: itemsProps) => (
              <CarouselItem key={item.id}>
                <Link to={`/cuisine/${item.id}`}>
                  <div className="relative cursor-pointer hover:scale-105 duration-300 w-80 sm:w-60 md:w-80">
                    <h3 className="absolute w-full text-center text-sm z-10 text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {item.title}
                    </h3>
                    <div className="absolute bg-black/30 w-full h-full"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-80 sm:w-60 md:w-80 shadow-lg"
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Popular;
