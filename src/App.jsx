import { Outlet } from "react-router-dom";
import Footer from "./Components/Fotter/Footer";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
