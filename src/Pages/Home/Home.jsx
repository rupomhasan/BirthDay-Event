import Navbar from "../../Components/Header/Navbar";
import Banner from "./Banner";
import OurEvents from "./OurEvents";
import OurService from "./OurService";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/banner.jpg')] bg-cover h-[100vh] bg-cyan-blue bg-blend-multiply">
        <Navbar></Navbar>

        <div className="max-w-screen-xl  mx-auto ">
          <Banner />
        </div>
      </div>
      <OurService />
      <OurEvents />
    </div>
  );
};

export default Home;
