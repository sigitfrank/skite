import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard";
import Products from "../Pages/Admin/Products";
import InProgress from "../Components/Admin/InProgress";
import Home from "../Pages/Customer/Home";
import Order from "../Pages/Customer/Order";
import Product from "../Pages/Customer/Product";
import NotFound from "../Components/Admin/NotFound";

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
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
