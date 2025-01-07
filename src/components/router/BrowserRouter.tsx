import { type RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Layout from "../common/Layout/Layout";
import MapPage from "../../pages/Map";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(router);
