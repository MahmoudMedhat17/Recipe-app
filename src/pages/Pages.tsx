import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "./Home";
import Cuisines from "./Cuisines";
import CuisineInfo from "@/components/CuisineInfo";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:cuisineType" element={<Cuisines />} />
        <Route path="/cuisine/:cuisineInfo" element={<CuisineInfo />} />
      </Routes>
    </>
  );
};

export default Pages;
