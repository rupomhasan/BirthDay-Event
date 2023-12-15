import { MdOutlineMailOutline } from "react-icons/md";

import { FaRegCopyright } from "react-icons/fa";

import Logo from "../Common/Logo";
import SocalLink from "../Common/SocalLink";

const Footer = () => {
  return (
    <div className=" text-white bg-gradient-to-r from-[#fe7259] to-[#ffaa5f] bg-blend-multiply  ">
      <footer className=" max-w-screen-xl mx-auto  grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-xl font-semibold py-16 px-4 md:px-8  md:py-12 ">
        <nav>
          <Logo />
          <SocalLink></SocalLink>
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
      <p className="flex justify-center items-center bg-[#fe7259] py-2">
        <FaRegCopyright />
        <span className="font-bold"> 2023.All Rights Reserved.</span>
      </p>
    </div>
  );
};

export default Footer;
