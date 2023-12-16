import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const SocalLink = () => {
  return (
    <div className="flex gap-1 ml-3 mt-2">
      <motion.p whileHover={{ scale: 1.1 }}>
        <FaFacebookF className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
      </motion.p>
      <motion.p whileHover={{ scale: 1.1 }}>
        <FaInstagram className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
      </motion.p>
      <motion.p whileHover={{ scale: 1.1 }}>
        <FaYoutube className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
      </motion.p>
      <motion.p whileHover={{ scale: 1.1 }}>
        <FaXTwitter className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
      </motion.p>
    </div>
  );
};

export default SocalLink;
