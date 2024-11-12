import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard";
import Products from "../Components/Organisms/Admin/Products";
import Home from "../Pages/Customer/Home";
import Order from "../Pages/Customer/Order";
import Product from "../Pages/Customer/Product";
import NotFound from "../Components/Atoms/NotFound";
import GlobalProvider from "../Store/GlobalProvider";
import InProgress from "../Components/Atoms/InProgress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalProvider>
      <Dashboard />
    </GlobalProvider>,
  },
  {
    path: "/products",
    element: <GlobalProvider><Products /></GlobalProvider>,
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
    element: <GlobalProvider><Home /></GlobalProvider>,
  },
  {
    path: "/order",
    element: <GlobalProvider><Order /></GlobalProvider>,
  },
  {
    path: "/products/:id",
    element: <GlobalProvider><Product /></GlobalProvider>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
