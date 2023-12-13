import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

import Logo from "../Common/Logo";

const Footer = () => {
  return (
    <div className=" bg-cyan-blue text-white">
      <footer className=" grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-xl font-semibold py-16 px-4  md:p-20 ">
        <nav>
          <Logo />
          <div className="flex gap-1 ml-3 mt-2">
            <FaFacebookF className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />

            <FaInstagram className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
            <FaYoutube className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
            <FaXTwitter className="text-white h-10 w-10 p-2 rounded-full border-2 hover:bg-yellow-dark" />
          </div>
        </nav>
        <nav>
          <header className="footer-title ">About</header>
          <p className="link link-hover">Branding</p>
          <p className="link link-hover">Privacy Policy</p>
          <p className="link link-hover">Careers</p>
          <p className="link link-hover">Blogs</p>
        </nav>
        <nav>
          <header className="footer-title ">Contacts</header>
          <p className="link link-hover">Our company</p>
          <p className="link link-hover">About us</p>
          <p className="link link-hover">Contact</p>
          <p className="link link-hover">Services</p>
          <p className="link link-hover">Gallery</p>
        </nav>
        <nav>
          <header className="footer-title">Call Now for Services</header>
          <p className="link link-hover text-yellow">444-333-2211</p>
          <p className="flex items-center gap-1">
            <MdOutlineMailOutline className="text-yellow text-xl" />
            Email Us
          </p>
          <p className="flex-grow link link-hover mt-5">
            123,New Lenox Chicago,
            <br /> IL 60606
          </p>
        </nav>
      </footer>
      <p className="flex justify-center items-center ">
        <FaRegCopyright />
        <span className="font-bold"> 2023.All Rights Reserved.</span>
      </p>
    </div>
  );
};

export default Footer;
