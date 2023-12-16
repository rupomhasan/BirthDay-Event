import { IoMdCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
const HelpDex = () => {
  return (
    <div className=" bg-gray200 p-10 my-5">
      <div className="lg:flex max-w-screen-xl mx-auto justify-center items-center">
        <div className=" md:text-center lg:text-left my-20">
          <h3 className="text-4xl max-w-2xl  md:text-6xl lg:text-8xl font-extrabold font-Rubik">
            We are here to help you
          </h3>

          <div className="mt-16 space-y-4 md:ml-12 lg:ml-0">
            <p className="flex gap-4 text-xl text-gray700">
              <MdLocationPin className="text-3xl text-orange" />
              Rangpur , Rangpur Sadar , Shalbon MistryPara
            </p>
            <p className="text-xl text-gray700 flex gap-4">
              <IoMailOpenOutline className="text-3xl text-orange" />
              name@example.com
            </p>
            <p className="flex gap-4 link-hover text-xl text-orange">
              <IoMdCall className="text-3xl" />
              01537112272
            </p>
          </div>
        </div>
        <div className="text-">
          <div className=" space-y-6 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className=" border-none p-5 w-full rounded-xl "
            />
            <input
              className="p-5 w-full rounded-xl border-none"
              type="email"
              placeholder="Your e-mail"
              required
            />
          </div>
          <textarea
            rows="5"
            color="20"
            placeholder="Your massage"
            className="p-6 w-full rounded-xl"
          />
          <div className="text-center">
            <motion.input
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="btn btn-lg w-[70%] text-xl bg-vivide-amber hover:bg-vivide-orange text-white mt-10 rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDex;
