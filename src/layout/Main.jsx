import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const { fullLoading } = useContext(AuthContext);

  if (fullLoading) {
    return <LoadingSpinner fullScreen={true}></LoadingSpinner>;
  }
  AOS.init();
  return (
    <>
      <NavBar></NavBar>
      
      <Outlet></Outlet>
      
      <Footer></Footer>
      </>
    
  );
};

export default Main;
