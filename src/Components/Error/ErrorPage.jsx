import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { motion } from "framer-motion";
const ErrorPage = () => {
  return (
    <div>
      <div className="bg-gray700 shadow-xl pb-5">
        <Navbar />
      </div>
      <div className="max-w-screen-xl  md:flex justify-evenly  items-center gap-10 mx-auto">
        <div className="space-y-5  md:mx-16 mx-5 mt-10 ">
          <h3 className="md:text-5xl lg:text-6xl font-bold font-Rubik">Page Not Found </h3>
          <p className="text-xl font-medium ">
            The page you are looking for does not exists or an other error
            occored
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn mt-5  w-56 text-white bg-orange hover:bg-btn-bg"
            >
              Go Back To Home
            </motion.button>
          </Link>
        </div>
        <div>
          <img className=" " src="/src/assets/error.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
