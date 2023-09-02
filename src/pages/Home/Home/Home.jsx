import { useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import CustomerSays from "../CustomerSays/CustomerSays";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useScrollTop from "../../../hooks/useScrollTop";

import Slider from "../../Slider/Slider";
import Hero from "../Hero/Hero";
import Questions from "../Questions/Questions";
import Hero2 from "../Hero/Hero2";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);
  useTitle("Home");

  return (
    <div>
      <Slider></Slider>
      <div className="w-[95%] md:w-[80%] mx-auto">
      <Banner></Banner>
      
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Hero></Hero>
      <CustomerSays></CustomerSays>
      <Hero2></Hero2>
      <Questions></Questions>
      <ContactUs></ContactUs>
      <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default Home;
