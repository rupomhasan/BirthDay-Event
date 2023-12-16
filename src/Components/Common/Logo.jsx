import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
    whileHover={{scale : 1.1}}
      className="flex items-center ml-2 text-white ">
      <LiaBirthdayCakeSolid className="text-yellow-dark font-extrabold text-5xl mb-2 " />
      <p className="font-Montserrat text- text-xl mt-2 font-semibold">
        <span className="text-2xl">P</span>arty
        <span className="text-yellow ">
          <span className="text-2xl">H</span>arbor
        </span>
      </p>
    </motion.div>
  );
};

export default Logo;
