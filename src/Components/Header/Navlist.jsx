import { NavLink } from "react-router-dom";

const Navlist = () => {
  return (
    <div>
      <ul className=" ml-5 mt-3 text-xl text-white space-y-3 sm:space-y-0 sm:flex gap-10 font-bold md:font-bold   ">
        <li className="hover:text-yellow">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-yellow" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-yellow">
          <NavLink
            to="/store"
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-yellow" : ""
            }
          >
            Store
          </NavLink>
        </li>
        <li className="hover:text-yellow">
          <NavLink
            to="/store"
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-yellow" : ""
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="hover:text-yellow">
          <NavLink
            to="/store"
            className={({ isActive, isPending }) =>
              isPending ? "text-white" : isActive ? "text-yellow" : ""
            }
          >
            Services
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navlist;
