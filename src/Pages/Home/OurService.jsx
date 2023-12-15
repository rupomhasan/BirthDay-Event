import { useContext } from "react";
import { AuthContext } from "../../Components/Auth/AuthProvider";

const OurService = () => {
  const { services } = useContext(AuthContext);

  console.log(services);
  return (
    <div>
      <div className="bg-gray200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6  py-10 px-5 md:py-20 md:px-10 lg:px-0 lg:py-48   max-w-screen-xl mx-auto ">
          {services.map((service, idx) => (
            <div key={idx}>
              <div className="text-center space-y-5">
                <img
                  className="w-40 h-40 bg-white hover:bg-yellow p-12 rounded-full "
                  src={service.icon}
                />
                <p className="text-2xl font-bold font-Pacifico text-yellow hover:link ">
                  {service.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
