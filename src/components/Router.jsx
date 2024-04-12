import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import DinosaurDetailsPage from "../pages/DinosaurDetailsPage";
import AboutPage from "../pages/AboutPage";
import DynamicMapPage from "../pages/DynamicMapPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div>ERROR 404 PAGE</div>,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/favorites",
      element: <FavoritesPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/search/:idParameter",
      element: <DinosaurDetailsPage />,
    },
    {
      path: "/overview-map",
      element: <DynamicMapPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
