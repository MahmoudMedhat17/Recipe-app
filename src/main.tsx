import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  // BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cuisines from "./pages/Cuisines.tsx";
import SearchedCuisine from "./components/SearchedCuisine.tsx";
import CuisineCard from "./components/CuisineCard.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cuisines/:cuisineType",
        element: <Cuisines />,
      },
      {
        path: "/searched/:userQuery",
        element: <SearchedCuisine />,
      },
      {
        path: "/cuisine/:cuisineId",
        element: <CuisineCard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Old way to use React router dom */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    {/* New way to user React router dom */}
    <RouterProvider router={router} />
  </StrictMode>
);
