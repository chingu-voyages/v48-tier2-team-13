import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import FavoritesPage from "../pages/FavoritesPage";
import DinosaurDetailsPage from "../pages/DinosaurDetailsPage";
import AboutPage from "../pages/AboutPage";

import {useNavigate} from 'react-router-dom'

function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
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
      errorElement: <DetailPageErrorBoundary/>
    },
  ]);
  return <RouterProvider router={router} />;
}

    function DetailPageErrorBoundary() {
      const navigate= useNavigate()
      navigate('/search')
      return <SearchPage/>
    }

export default Router;
