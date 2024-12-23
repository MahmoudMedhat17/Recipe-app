import Categories from "@/components/Categories";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const Home = () => {
  const [userQuery, setUserQuery] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const handleSearch = async () => {
    if (!userQuery.trim()) return;

    try {
      const getSearchRes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${userQuery}`
      );
      const response = await getSearchRes.data;
      setSearchRes(response);
      setUserQuery("");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="space-y-8">
      {
        
      }
      <SearchBar
        userQuery={userQuery}
        setUserQuery={setUserQuery}
        handleSearch={handleSearch}
        searchRes={searchRes}
      />
      <Categories />
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
