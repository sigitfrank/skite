import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Products from "../Pages/Products";
import InProgress from "../Components/Admin/InProgress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/sales",
    element: <InProgress />,
  },
  {
    path: "/settings",
    element: <InProgress />,
  },
]);
