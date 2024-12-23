import { FaSearch } from "react-icons/fa";

const SearchBar = ({ userQuery, setUserQuery, handleSearch, searchRes }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleSearch}
          className="bg-gray-900/80 p-3 rounded-l-lg"
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
          className="w-1/2 bg-gray-900/80 p-2 rounded-r-lg placeholder:text-slate-300"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 md:px-5 lg:px-2">
        {searchRes?.results?.map((item) => (
          <div key={item.id}>
            <h3 className="font-semibold text-lg text-center">{item.title}</h3>
            <img src={item.image} className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
