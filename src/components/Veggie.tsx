import axios from "axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

interface Iveggies {
  id: number;
  title: string;
  image: string;
}

const Veggie = () => {
  const [veggiesRecipes, setVeggiesRecipes] = useState<Iveggies[]>([]);

  useEffect(() => {
    const getVeggies = async () => {
      try {
        // Get Stored data in LocalStorage
        const checkLs = localStorage.getItem("veggies");

        // If data exists then don't fetch the data from the API and get it from the cache
        if (checkLs) {
          setVeggiesRecipes(JSON.parse(checkLs));
        }
        // If not then fetch the data from the API that prevents from calling the API on every render
        else {
          const veggiesData = await axios.get(
            `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY}&include-tags=vegetarian`
          );
          const response = veggiesData.data;
          setVeggiesRecipes(response);
          // This line set the data from the API and set it to the localStorage
          localStorage.setItem("veggies", JSON.stringify(response));
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getVeggies();
  }, []);

  return (
    <div className="px-10 md:px-5 xl:px-0 space-y-4">
      <h3 className="font-bold text-lg">Veggeterian picks</h3>
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
          {veggiesRecipes?.recipes?.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative cursor-pointer hover:scale-105 duration-300">
                <h3 className="absolute w-full text-center text-sm z-10 text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {item.title}
                </h3>
                <div className="absolute bg-black/20 w-full h-full"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-80 shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Veggie;
