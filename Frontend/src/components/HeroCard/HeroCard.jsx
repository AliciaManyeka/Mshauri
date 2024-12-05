import { div } from "framer-motion/client";
import React from "react";
// import wave from "../../assets/wave Gif.gif";
import { FaReact, FaUsers, FaChartLine, FaCalculator, FaRocket } from 'react-icons/fa';

const ServiceData = [
  {
    title: "INFORMATION TECHNOLOGY",
    
    description:
      "Use technology to achieve and surpass your business goals.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "TALENT MANAGEMENT",
   
    description:
      "Attract and recruit the best talen",
    icon: <FaUsers className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GROWTH AND SALES STRATEGIES",
   
    description:
      "Exceptional techniques to boost your sales and help grow your business.",

    icon: <FaChartLine className="text-7xl" />,
    aosDelay: "700",
  },
  {
    title: "ACCOUNTING",
  
    description:
      "Expert accounting solutions for informed decision-making.",

    icon: <FaCalculator className="text-7xl" />,
    aosDelay: "900",
  },
];
const HeroCard = () => {
  return (
       <section className="bg-gradient-to-r from-red-900 to-black flex gap-4 justify-center items-center">
        <div className="container">
          <div className="min-h-[500px]">
            <div>
              <div className="top-0 sm:top-10 grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
                {ServiceData.map((data) => (
                  <div
                    key={data.title}
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    className="flex flex-col justify-center items-center rounded-xl gap-4 bg-white/10 backdrop-blur-sm text-white text-center text-2xl py-4 px-3 transition-transform transform hover:scale-105  hover:bg-gradient-to-r from-black to-red-900 hover:border-4 hover:border-red-600 hover:shadow-[0_0_10px_rgba(255,0,0,0.8),0_0_20px_rgba(255,0,0,0.6)] min-h-[180px] sm:min-h-[300px] md:min-h-[220px] lg:min-h-[340px] xl:min-h-[400px] w-full"
                  >
                    {data.icon}
                    <h1 className=" text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">{data.title}</h1>
                   <p className="text-[20px] font-extralight">{data.description}</p>
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
      </section>
  
    
  );
};

export default HeroCard;
