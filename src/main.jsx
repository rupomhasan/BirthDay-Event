import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MycreatedRoutes from "./Routes/MycreatedRoutes.jsx";
import AuthProvider from "./Components/Auth/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MycreatedRoutes} />
    </AuthProvider>
  </React.StrictMode>
);
