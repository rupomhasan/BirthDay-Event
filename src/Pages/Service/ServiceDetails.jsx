import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Components/Auth/AuthProvider";
import LocalTheme from "../../Components/Common/LocalTheme";
import { motion } from "framer-motion";
import TeamMember from "../../Components/Common/TeamMember";
const ServiceDetails = () => {
  const { id } = useParams();
  const { services } = useContext(AuthContext);
  console.log(services);
  const idx = parseInt(id);
  const isExist = services.find((service) => service.id === idx);
  console.log(isExist);
  const { image, name, description } = isExist;

  console.log(id);

  return (
    <div>
      <div>
        <LocalTheme title={name} />
      </div>
      <div className="lg:flex  gap-10 max-w-screen-xl mx-auto my-20">
        <div className="ml-6 md:mx-20">
          <p className="text-center px-16  py-6 bg-gray200 font-bold text-2xl  w-fit">
            Services
          </p>
          <div className="mb-10 w-fit static ">
            {services.map((service) => (
              <div
                className="border-b-2 text-gray700  ml-3 border-dashed"
                key={service.id}
              >
                {
                  <Link className="" to={`/service/${service.id}`}>
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-lg text-gray700  w-fit  pt-3"
                    >
                      {service.name}
                    </motion.h2>
                  </Link>
                }
              </div>
            ))}
          </div>
        </div>
        <div className=" mx-6 md:mx-20">
          <div>
            <img src={image} alt="servicename" />
          </div>
          <h3 className="font-extrabold text-4xl font-Rubik my-8">{name}</h3>
          <p className="text-gray600 font-medium text-lg mb-20">
            {description}
          </p>
          <TeamMember />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-lg px-16 rounded-full hover:bg-yellow-dark mb-10  text-white bg-orange "
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
