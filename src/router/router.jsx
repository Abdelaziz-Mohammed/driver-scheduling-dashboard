import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./../pages/dashboard/Dashboard";
import Drivers from "./../pages/drivers/Drivers";
import Routes from "./../pages/routes/Routes";
import Error from "./../pages/error/Error";
import Home from "../pages/home/Home";
import App from "./../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "drivers",
        element: <Drivers />,
      },
      {
        path: "routes",
        element: <Routes />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
