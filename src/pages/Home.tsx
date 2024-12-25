import Categories from "@/components/Categories";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="space-y-8">
      <SearchBar />
      <Categories />
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
