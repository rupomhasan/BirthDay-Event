import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Navlist = () => {
  return (
    <div>
      <ul className=" ml-5 mt-3 text-xl text-white space-y-3 sm:space-y-0 sm:flex gap-10 font-bold md:font-bold   ">
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-yellow"
        >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-yellow" : ""
            }
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-yellow"
        >
          <NavLink
            to="/store"
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-yellow" : ""
            }
          >
            Store
          </NavLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-yellow"
        >
          <NavLink
            to="/store"
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-yellow" : ""
            }
          >
            About Us
          </NavLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-yellow"
        >
          <NavLink
            to="/store"
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-yellow" : ""
            }
          >
            Services
          </NavLink>
        </motion.li>
      </ul>
    </div>
  );
};

export default Navlist;
