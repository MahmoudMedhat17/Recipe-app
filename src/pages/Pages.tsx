// import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
// import Home from "./Home";
// import Cuisines from "./Cuisines";
// import SearchedCuisine from "@/components/SearchedCuisine";
import Footer from "@/components/Footer";
// import CuisineCard from "@/components/CuisineCard";
import { Outlet } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet renders the children */}
        <Outlet />
      </main>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:cuisineType" element={<Cuisines />} />
        <Route path="/searched/:userQuery" element={<SearchedCuisine />} />
        <Route path="/cuisine/:cuisineId" element={<CuisineCard />} />
      </Routes> */}
      <Footer />
    </>
  );
};

export default Pages;
