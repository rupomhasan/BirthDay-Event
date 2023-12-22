import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Components/Auth/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Socal from "./Socal";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const notify = (message) => toast(message);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email);

    userLogin(email, password)
      .then((res) => {
        console.log(res);
        notify("Successfully Login ");
      })
      .catch((error) => {
        console.log(error.message);
        notify(error.message);
      });
  };

  return (
    <>
      <div className="bg-gray200 pb-5 shadow-lg">
        <Navbar />
      </div>
      <div className="max-w-screen-sm mx-auto my-20  ">
        <div className="mx-3 rounded bg-gradient-to-l from-[#fe7259] to-[#ffaa5f] h-3"></div>

        <div className="mt-10 mx-2 bg-gray pb-5 rounded-b-xl shadow-xl">
          <h3 className="font-bold text-5xl font-Montserrat py-4 text-white rounded-t-xl bg-purple px-5">
            Sign In
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5 my-3">
            <div className="grid grid-cols-3 text-xl bg-gray200 gap-10 px-5 py-2 items-center">
              <p className="  font-semibold text-gray700">Your Email </p>
              <input
                type="email"
                name="email"
                className="col-span-2 px-5 py-1"
                required
                placeholder="name@gmail.com"
              />
            </div>
            <div className="grid grid-cols-3 text-xl bg-gray200 gap-4 px-5 py-2 items-center">
              <p className="  font-semibold text-gray700">Your Password </p>
              <input
                type="password"
                name="password"
                className="col-span-2 px-5 py-1 ml-1 "
                placeholder="Password"
                required
              />
            </div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
            >
              <input
                type="submit"
                value="Sign In"
                className="btn w-[98%]  px-10 bg-btn-bg hover:bg-vivide-amber text-2xl text-white"
              />
            </motion.div>
          </form>
          <div className="text-center text-xl flex justify-center">
            <p>Don't have an account?</p>
            <Link to="/register" className="hover:link font-bold">
              Create an account
            </Link>
          </div>

          <Socal />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
