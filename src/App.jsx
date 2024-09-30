import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";
import PurchaseSection from "./components/PurchaseSection";
import DesignSection from "./components/DesignSection";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";


const App = () => {
  return (
    <div className="bg-bgColor text-twhite font-outfit  ">
      
      
      <Header/>
      <HeroSection/>
      <Reviews/>
      <PurchaseSection/>
      <DesignSection/>
      <SupportSection/>
      <Footer/>
      <CopyRight/>
    </div>
  );
};

export default App;
