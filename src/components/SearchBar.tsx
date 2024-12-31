import { FaSearch } from "react-icons/fa";
import SearchedCuisine from "./SearchedCuisine";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [userQuery, setUserQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    navigate(`/searched/${userQuery}`);
    setUserQuery("");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center items-center pt-10 px-10 sm:px-0">
        <button
          onClick={handleSearch}
          className="bg-gray-900/80 dark:bg-slate-600 p-3 rounded-l-lg"
          type="submit"
        >
          <FaSearch className="text-slate-300" />
        </button>
        <input
          type="text"
          placeholder="Search Cuisine"
          value={userQuery}
          onChange={(e) => {
            setUserQuery(e.target.value);
          }}
          className="dark:bg-slate-600 focus:outline-none w-full sm:w-1/2 bg-gray-900/80 p-2 rounded-r-lg placeholder:text-slate-300 text-slate-300"
        />
      </div>
      <SearchedCuisine />
    </form>
  );
};

export default SearchBar;
