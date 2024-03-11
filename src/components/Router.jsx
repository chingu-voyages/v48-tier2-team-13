import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

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
      errorElement: <div>ERROR 404 PAGE</div>,
    },

  ]);
  return <RouterProvider router={router} />;
}

export default Router;
