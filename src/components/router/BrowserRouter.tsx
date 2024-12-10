import { type RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Layout from "../common/Layout/Layout";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(router);
