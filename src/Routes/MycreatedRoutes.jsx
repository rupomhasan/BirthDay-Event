import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/Error/ErrorPage";
import Store from "../Pages/Store/Store";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails";

const MycreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/store",
        loader: () => fetch("/public/store.json"),
        element: <Store />,
      },
      {
        path: "/service",
        loader: () => fetch("/public/service.json"),
        element: <Service />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/aboutUs",
        loader: () => fetch("/public/teamMember.json"),
        element : <
      },
    ],
  },
]);

export default MycreatedRoutes;
