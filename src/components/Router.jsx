import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div>ERROR 404 PAGE</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
