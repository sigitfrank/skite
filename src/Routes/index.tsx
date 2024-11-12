import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard";
import Products from "../Pages/Admin/Products";
import InProgress from "../Components/Admin/InProgress";
import Home from "../Pages/Customer/Home";
import Order from "../Pages/Customer/Order";

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
  {
    path: "/shop",
    element: <Home />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);
