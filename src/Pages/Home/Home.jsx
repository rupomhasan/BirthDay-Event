import Navbar from "../../Components/Header/Navbar";
import Banner from "./Banner";
import ClientReview from "./ClientReview";
import Extra from "./Extra";
import OurEvents from "./OurEvents";
import OurService from "./OurService";
import Plans from "./Plans";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/banner.jpg')] bg-cover h-[100vh] bg-cyan-blue bg-blend-multiply">
        <Navbar></Navbar>

        <div className="max-w-screen-xl  mx-auto ">
          <Banner />
        </div>
      </div>
      <OurService />
      <OurEvents />
      <Plans />
      <Extra />
      <ClientReview />
    </div>
  );
};

export default Home;
