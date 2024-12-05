import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/VT1U.gif";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About.jsx";
import TaskManagment from "./components/TaskManagment/TaskMangment.jsx";
import InventoryTracking from "./components/InventoryTracking/InventoryTracking.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <img
          src={BgVideo}
          alt="Background"
          className="fixed right-0 top-0 h-full w-full object-cover z-[-1]"
        />
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md z-10 h-full" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <Navbar />
          <Hero />
        </div>
      </div>
        <About/>
      <div className="mt-4">
        <HeroCard />
      </div>
      <TaskManagment/>
      <InventoryTracking/>
      <Contact/>
    <Footer/>
    </div>
  );
};

export default App;
