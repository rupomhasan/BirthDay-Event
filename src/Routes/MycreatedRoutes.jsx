import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/Error/ErrorPage";
import Store from "../Pages/Store/Store";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import ContactUs from "../Pages/Contact/ContactUs";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";

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
        element: (
          <PrivetRoute>
            <Store />
          </PrivetRoute>
        ),
      },
      {
        path: "/service",
        loader: () => fetch("/public/service.json"),
        element: (
          <PrivetRoute>
            <Service />
          </PrivetRoute>
        ),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default MycreatedRoutes;
