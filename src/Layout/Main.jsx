import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="container mx-auto"></div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
