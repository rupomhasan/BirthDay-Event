import { Outlet } from "react-router-dom";
import Footer from "./Components/Fotter/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Header/Navbar";

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
