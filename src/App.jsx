import { Outlet } from "react-router-dom";
import Footer from "./Components/Fotter/Footer";

function App() {
  return (
    <>
   
   
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
