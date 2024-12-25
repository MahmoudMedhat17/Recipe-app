import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "./Home";
import Cuisines from "./Cuisines";
import CuisineInfo from "@/components/CuisineInfo";
import SearchedCuisine from "@/components/SearchedCuisine";
import Footer from "@/components/Footer";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:cuisineType" element={<Cuisines />} />
        {/* <Route path="/cuisine/:cuisineInfo" element={<CuisineInfo />} /> */}
        <Route path="/searched/:userQuery" element={<SearchedCuisine />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
