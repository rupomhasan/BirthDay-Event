import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";

const MycreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
  },
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default MycreatedRoutes;
