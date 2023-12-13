import Navlist from "./Navlist";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Logo from "../Common/Logo";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  console.log(navMenu);

  return (
    <div>
      <div >
        {navMenu && (
          <div className=" sm:hidden h-[50vh] pt-7 bg-gray-dark ">
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
              <button className=" btn w-4/5  btn-sm border-none rounded-full  bg-btn-bg hover:bg-yellow-dark text-lg text-white font-extrabold">
                Login
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className={` ${
          navMenu && "hidden sm:flex"
        } flex items-center justify-between max-w-screen-xl mx-auto mt-6 `}
      >
        {/* <div className="flex items-center ml-2">
          <LiaBirthdayCakeSolid className="text-yellow-dark text-5xl mb-2 " />
          <p className="font-Montserrat text-white text-xl mt-2 font-semibold">
            <span className="text-2xl">P</span>arty
            <span className="text-yellow ">
              <span className="text-2xl">H</span>arbor
            </span>
          </p>
        </div> */}
        <Logo />
        <button
          onClick={() => setNavMenu(true)}
          className="btn rounded-full text-white bg-yellow hover:bg-yellow-dark text-4xl mr-6 sm:hidden"
        >
          <IoMenu />
        </button>
        <div className=" hidden sm:flex items-center gap-12">
          <div className="">
            <Navlist></Navlist>
          </div>
          <div className="mr-2">
            <button className=" btn w-[100px] btn-sm  rounded-full  bg-btn-bg hover:bg-yellow-dark text-lg text-white font-extrabold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
