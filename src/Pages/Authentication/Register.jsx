import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Socal from "./Socal";
const Register = () => {
  const [message, setMessage] = useState("");
  const { userCreate } = useContext(AuthContext);
  const notify = (message) => toast(message);
  const handleUser = (e) => {
    setMessage("");

    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(terms);
    if (6 > password.length) {
      setMessage("password must be 6 char");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setMessage("password must be one upercase ");
      return;
    } else if (!/[a-z]/.test(password)) {
      setMessage("Password must be one lowerCase");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setMessage("password must be one special Charcter");
      return;
    } else if (password !== confirmPassword) {
      setMessage("Password did not match");
      return;
    } else if (terms === false) {
      setMessage("please Checked the terms");
      return;
    }
    console.log(name, email, password, confirmPassword);
    userCreate(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            notify("Successfully User created");
            console.log("profile Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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
            Sign Up
          </h3>
          <form onSubmit={handleUser} className="space-y-5 my-3">
            <div className="grid grid-cols-3  font-semibold text-gray700 bg-gray200 gap-10 px-5 py-2 items-center">
              <p className="text-xl  ">Your Name </p>
              <input
                type="text"
                name="name"
                className=" col-span-2 px-5 py-1"
                placeholder="name"
                required
              />
            </div>
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
                placeholder="Password(6-20 charcacters)"
                required
              />
            </div>
            <div className="grid grid-cols-3 text-xl bg-gray200 gap-4 px-5 py-2 items-center">
              <p className="  font-semibold text-gray700">Your Password </p>
              <input
                type="password"
                name="confirmPassword"
                className="col-span-2 px-5 py-1 ml-1 "
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="flex ml-5 gap-5">
              <input type="checkbox" id="terms" className=" rounded-full" />
              <label htmlFor="terms" className="text-x select-none">
                i accept
                <span className="text-vivid-red hover:link font-semibold">
                  Terms of Service
                </span>
                and
                <span className="text-vivid-red hover:link font-semibold">
                  Privacy Policy
                </span>
              </label>
            </div>
            <p className="text-lg font-semibold ml-5 text-vivid-red">
              {message}
            </p>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
            >
              <input
                type="submit"
                value="Create an account"
                className="btn w-[98%]  px-10 bg-btn-bg hover:bg-vivide-amber text-2xl text-white"
              />
            </motion.div>
          </form>
          <div className="text-center text-xl flex justify-center">
            <p>Already have an account?</p>
            <Link to="/login" className="hover:link font-bold">
              SignIn
            </Link>
          </div>

          <Socal />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
