import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocalLink = () => {
    return (
        <div className="flex gap-1 ml-3 mt-2">
        <FaFacebookF className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />

        <FaInstagram className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
        <FaYoutube className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
        <FaXTwitter className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
      </div>
    );
};

export default SocalLink;