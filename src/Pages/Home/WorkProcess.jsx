import { motion } from "framer-motion";
const WorkProcess = () => {
  return (
    <div className="bg-gray200 p-10 my-5">
      <div className="lg:flex max-w-screen-xl mx-auto items-center justify-between gap-20  ">
        <div className="md:py-20 ">
          <h3 className="text-4xl text-center md:text-left md:text-6xl lg:text-8xl font-Rubik font-extrabold ">
            Our working process
          </h3>
          <p className="text-xl max-w-2xl  text-center md:text-left  my-5 text-gray600 font-semibold">
            You have event to plan and have the solution.As the premier event
            planing company in ou country , we know that's not " one size fits
            all."
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="my-10 btn rounded-full text-xl btn-lg px-10 bg-white border-none hover:bg-vivide-amber  hover:text-white"
          >
            More About Us
          </motion.button>
        </div>
        <div className="w-xl lg:w-[60%] md:h-[324px]">
          <iframe
            className=""
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/B5Z6IqLkWhw?si=nXCIRQx2_8ewYZNW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
