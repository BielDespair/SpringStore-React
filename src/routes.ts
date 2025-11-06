import { createBrowserRouter } from "react-router";
import User from "./pages/User";
import App from "./App";
import Home from "./pages/Home";
import Product from "./pages/Product";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/user", Component: User },
      {
        path: "/product",
        Component: Product,
      },
    ],
  },
]);


export default router;