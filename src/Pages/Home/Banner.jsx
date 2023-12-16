import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex  flex-col h-[100vh] justify-center ">
      <div className=" flex justify-around md:mx-10 items-center">
        <div className="w-full">
          <motion.p
            initial={{ y: -1000 }}
            animate={{ y: 5 }}
            transition={{ duration: "0.7", delay: "0.3" }}
            className="font-Pacifico my-4 text-white font-semibold text-xl"
          >
            let's have a party!
          </motion.p>
          <motion.h2
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: "1", delay: "1" }}
            className="text-yellow text-6xl lg:text-8xl font-extrabold"
          >
            it's time to
            <br />
            celebrate!
          </motion.h2>
          <motion.div
            className="w-fit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <motion.button
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              transition={{ duration: "1.5", delay: "1.8" }}
              className="my-10 btn rounded-full text-xl btn-lg px-10 bg-white border-none hover:bg-vivide-amber  hover:text-white"
            >
              Register Me!
            </motion.button>
          </motion.div>
        </div>
        <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <div className=" overflow-hidden  hidden md:flex rotate-3 ">
            <motion.img
              initial={{ y: -2000 }}
              animate={{ y: 0 }}
              transition={{ duration: "2.3", delay: "1.8" }}
              className="mg:w-80 lg:w-[900px]  border-8  border-white "
              src="/src/assets/banner_card1.jpg"
              alt="birthdayCard1"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
