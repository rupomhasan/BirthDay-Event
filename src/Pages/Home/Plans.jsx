import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/public/plans.json")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-gray200 py-20">
      <div className="text-center space-y-5 ">
        <p className="text-2xl font-semibold font-Pacifico">
          Choose your holiday
        </p>
        <h3 className="font-bold text-5xl text-vivid-red">
          Our Events Packages
        </h3>
      </div>
      <div className="max-w-screen-xl mx-auto px-10">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
          {plans.map((plan) => (
            <motion.div
            whileHover={{scale : 1.1}}  
              className="mt-10 " key={plan.id}>
              <div className="text-center bg-white rounded-md md:px-0  py-8 p-5 ">
                <div className="space-y-5">
                  <h2 className="font-bold text-2xl">{plan.name}</h2>
                  <p className="text-lg text-gray600 font-semibold">From</p>
                  <motion.p whileHover={{scale : 1.2}} className="text-2xl font-bold text-orange font-Montserrat">
                    {plan.price}
                  </motion.p>
                </div>
              </div>
              <div className="py-8 text-center bg-gray-light font-bold text-lg text-gray700">
                <p>{plan.service}</p>
                <p>Up to {plan.persons}</p>
                <p>Persons</p>
                <p>{plan.details1}</p>
                <p>{plan.details2}</p>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{scale : 0.9}}
                  className="flex justify-center mt-8">
                  <FaAngleDoubleDown className="text-xl bg-white w-12 h-12 p-3 hover:text-white hover:bg-yellow rounded-full " />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
