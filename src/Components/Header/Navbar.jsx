import Navlist from "./Navlist";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import Logo from "../Common/Logo";
import SocalLink from "../Common/SocalLink";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const notify = (message) => toast(message);
  const [navMenu, setNavMenu] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <AnimatePresence className="max-w-screen-xl mx-auto ">
      {navMenu ? (
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{
            duration: "0.7",
          }}
          className=" absolute w-[100%] sm:hidden border-b-4 border-white  py-7 bg-gray-dark "
        >
          <div className="flex items-center justify-between px-2">
            <Logo />
            <button
              onClick={() => setNavMenu(false)}
              className="btn btn-sm bg-btn-bg border-none text-white rounded-full text-2xl mr-3 mt-2"
            >
              X
            </button>
          </div>
          <Navlist></Navlist>
          <div className="text-center mt-6 ">
            {user ? (
              <motion.button
                onClick={() =>
                  signOut(auth)
                    .then(() => notify("LogOut Successfull"))
                    .catch((error) => console.log(error))
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" btn w-4/5  btn-sm border-none rounded-full  bg-btn-bg hover:bg-yellow-dark text-lg text-white font-extrabold"
              >
                LogOut
              </motion.button>
            ) : (
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className=" btn w-4/5  btn-sm border-none rounded-full  bg-btn-bg hover:bg-yellow-dark text-lg text-white font-extrabold"
                >
                  Login
                </motion.button>
              </Link>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <p className="text-center text-white font-bold text-2xl">
              Follow Us :{" "}
            </p>
            <SocalLink />
          </div>
        </motion.div>
      ) : (
        <div className=" flex items-center justify-between max-w-screen-xl mx-auto pt-8 ">
          <Logo />
          <button
            onClick={() => setNavMenu(true)}
            className="btn rounded-full text-white bg-yellow hover:bg-yellow-dark text-4xl mr-6 sm:hidden"
          >
            <IoMenu />
          </button>
          <div className=" hidden sm:flex items-center gap-10">
            <div className="">
              <Navlist></Navlist>
            </div>
            {user ? (
              <motion.button
                onClick={() =>
                  signOut(auth)
                    .then(() => {
                      notify("LogOut Successfull");
                    })
                    .catch((error) => console.log(error.message))
                }
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                className=" btn w-[100px] border-none btn-sm  rounded-full  bg-btn-bg hover:bg-yellow-dark text-lg text-white font-extrabold"
              >
                {" "}
                LogOut
              </motion.button>
            ) : (
              <Link to="/login" className="mr-2 mt-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.2 }}
                  className=" btn w-[100px] border-none btn-sm  rounded-full  bg-btn-bg hover:bg-yellow-dark text-lg text-white font-extrabold"
                >
                  Login
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </AnimatePresence>
  );
};

export default Navbar;
