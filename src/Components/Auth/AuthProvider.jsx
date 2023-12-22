import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import PropTypes from "prop-types";
import auth from "../../Firebase/Config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([1]);
  const [user, setUser] = useState(false);

  //user Create
  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const googleUser = (provider) => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    fetch("/public/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else setUser(false);
    });
  }, []);

  const authentication = { user, services, userCreate, userLogin , googleUser };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
