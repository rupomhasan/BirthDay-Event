import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
