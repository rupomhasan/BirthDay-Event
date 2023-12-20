import { Link, useLoaderData } from "react-router-dom";
import LocalTheme from "../../Components/Common/LocalTheme";
import { motion } from "framer-motion";
import Plans from "../Home/Plans";
import { useContext } from "react";
import { AuthContext } from "../../Components/Auth/AuthProvider";
const Service = () => {
  const title = "Services";

  const { services } = useContext(AuthContext);
  // const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <div>
        <LocalTheme title={title} />
      </div>
      <div className="my-28">
        <h3 className="text-3xl font-medium text-center font-Pacifico">
          Our services
        </h3>
        <h2 className="text-5xl font-bold text-center font-Rubik text-vivide-orange my-5">
          What We Offer
        </h2>
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-28 mt-20">
          {services.map((data) => (
            <Link to={`/service/${data.id}`} className="mx-5" key={data.id}>
              <div className="flex gap-5 bg-gray-dark bg-blend-multiply ">
                <img
                  className="rounded-lg"
                  src={data.image}
                  alt="serviceImage"
                />
              </div>
              <div className="ml-4">
                <motion.h3
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.99 }}
                  className="text-2xl font-Montserrat font-bold  mb-8 mt-12 hover:text-orange"
                >
                  {data.name}
                </motion.h3>
                <p className="text-gray600 font-medium text-xl">
                  {data.description.slice(0, 90)}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-lg px-14 mt-10 rounded-full text-white text-xl bg-yellow-dark hover:bg-btn-bg"
                >
                  Read more
                </motion.button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Plans />
    </div>
  );
};

export default Service;
