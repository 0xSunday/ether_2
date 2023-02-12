import React from "react";
import ether from "../public/ether.png";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainHeading = () => {
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 4,
    },
    800: {
      items: 6,
    },
  };
  const items = [
    <h1>MUMBAI</h1>,
    <h1>PARIS</h1>,
    <h1>NEW WORK</h1>,
    <h1>LONDON</h1>,
    <h1>NAIROBI</h1>,
    <h1>DUBAI</h1>,
    <h1>SINGAPORE</h1>,
    <h1>ROME</h1>,
    <h1>TOKYO</h1>,
    <h1>MOSCOW</h1>,
  ];

  return (
    <section className=" flex flex-col   flex-1 sm:px-14 px-6 py-10 sm:py-10 sm:pt-0 ">
      <div className=" flex  sm:flex-row flex-1 flex-col-reverse ">
        <div className="flex flex-[50%] justify-center items-center py-5 z-0 -mt-10 sm:mt-0">
          <Image
            // className="md:h-[90%] md:w-[90%] w-[100%] h-[100%] pb-28  "
            className="w-[100%] h-[100%] relative z-[5] mt-8 sm:mt-0 "
            src={ether}
            alt="Picture of the author"
          />
        </div>

        <div className=" flex flex-[50%]  flex-col pt-10 items-start sm:pt-32 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 ">
          <h1 className="md:text-[80px]   text-[50px] -mt-10 sm:mt-0 font-bold font-rubik sm:-mb-10 ">
            PROJECT
          </h1>
          <h1 className="md:text-[150px]  text-[80px] -mt-7 sm:mt-0 font-bold font-rubik ">
            ETHER
          </h1>
          <p className="font-poppins font-semibold py-3 l sm:text-3x text-xl max-w-[400px] md:max-w-full text-white">
            Finding Loyal Owners And Art Lovers, The Story Begins.
          </p>
          <button className="bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 text-white flex my-5 py-3 px-8 border sm:ml-auto mr-[60px] text-2xl font-bold border-black gap-2 justify-center text-center rounded-3xl items-cente  hover:bg-gradient-to-r hover:from-fuchsia-700 hover:via-red-900 hover:to-orange-600 keyfra z-10">
            <a
              className="flex gap-2 justify-center text-center items-center"
              href="https://discord.gg/etherproject"
            >
              Join <FaDiscord />
            </a>
          </button>
        </div>
      </div>
      <div className="mb-20 md:mt-28  sm:mt-10 ss:mt-20 flex-[50%] ">
        <div className="flex items-center justify-center border-black border-2 text-center bg-pink-900 text-white p-1 sm:p-2 rounded-2xl -rotate-12">
          <AliceCarousel
            infinite
            MobileFriendly
            autoPlay={10000}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
          />
        </div>
        <div className="flex sm:-mt-11 -mt-9 items-center justify-center text-center  border-black border-2 bg-pink-900 text-white sm:p-2 p-1 rounded-2xl  rotate-12">
          <AliceCarousel
            infinite={true}
            autoPlay={10000}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlayDirection={("ltr", "rtl")}
          />
        </div>
      </div>
    </section>
  );
};

export default MainHeading;
