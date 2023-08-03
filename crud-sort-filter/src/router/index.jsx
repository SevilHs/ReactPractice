import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddEdit from "../pages/AddEdit";
import Movies from "../pages/Movies";
import Favourites from "../pages/Favourites";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-edit",
        element: <AddEdit />,
      },
      {
        path: "add-edit/:id",
        element: <AddEdit />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
