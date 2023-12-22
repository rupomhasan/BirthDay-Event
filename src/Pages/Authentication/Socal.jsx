import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Components/Auth/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Socal = () => {
  const { googleUser } = useContext(AuthContext);
  const notify = (message) => toast(message);
  const provider = new GoogleAuthProvider();
  const handlGogle = () => {
    googleUser(provider)
      .then((res) => {
        notify("Successfull");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
  };
  return (
    <div>
      <div className="flex gap-4 justify-center items-center mx-5 mt-5">
        <div className=" h-1 w-full bg-gradient-to-l from-[#fe7259] to-[#ffaa5f]"></div>{" "}
        <p className="font-bold text-xl">or</p>
        <div className=" h-1 w-full bg-gradient-to-l from-[#fe7259] to-[#ffaa5f] "></div>
      </div>
      <div onClick={handlGogle} className="flex badge w-full py-6 gap-5 my-5">
        <FcGoogle className="text-2xl" />
        <p className="text-2xl font-bold font-Montserrat">
          Sign up with Google{" "}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Socal;
