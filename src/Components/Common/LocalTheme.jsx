import Navbar from "../../Components/Header/Navbar";
import PropTypes from "prop-types";
const LocalTheme = ({ title }) => {
  return (
    <div className=" h-[70vh] bg-[url('/src/assets/people-party.jpg')] bg-cover bg-[#878786] bg-blend-multiply  ">
      <Navbar />

      <p className="text-5xl text-center pt-32 font-bold font-Montserrat text-yellow hover:text-white">
        {title}
      </p>
    </div>
  );
};

LocalTheme.propTypes = {
  title: PropTypes.string,
};

export default LocalTheme;
