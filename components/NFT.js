import React, { useEffect, useState } from "react";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick";

import { nftImages } from "../Data";

const NFT = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    nftImages ? setAuth(true) : setAuth(false);
  }, []);

  const responsive = {
    0: {
      items: 2,
    },
    612: {
      items: 3,
    },
    950: {
      items: 5,
    },
  };
  const items = nftImages.map((nft) => (
    <div className="flex items-center justify-center px-5 zoom  ">
      <Image
        className="rounded-2xl my-10  sm:scale-[2] "
        src={`/${nft.image}`}
        key={nft.id}
        alt={nft.alt}
        width={600}
        height={600}
      />
    </div>
  ));
  return (
    <section
      id="nft"
      className=" flex flex-col flex-1 py-14 sm:py-20 px-6 text-white "
    >
      <div className="flex flex-col sm:flex-row flex-1">
        <div className="flex-[50%] flex flex-col justify-center items-center text-center sm:gap-8 gap-5 w-full pb-5 ">
          <h1 className="md:md:text-[60px] text-3xl sm:text-4xl  sm:pb-9 font font-poppins   font-bold  text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500">
            MEET THE EHTER
          </h1>
          <p className=" sm:text-[30px] flex justify-center items-center font-poppins font-semibold sm:max-w-[700px] text-center ">
            The world of art is vast and diverse, with countless individuals
            working to create and share their unique visions with the world. One
            such person is @visionofviii ,through his own hard work and
            dedication, he has managed to create beautiful and meaningful pieces
            @ether
          </p>

          {/* <p className=" sm:text-[30px] flex justify-center items-center font-poppins font-semibold sm:max-w-[700px] text-center ">
            VII is a digital artist who creates unique and visually stunning
            pieces using a combination of traditional art techniques and digital
            tools. He has a passion for exploring new technologies.
          </p> */}
        </div>
      </div>
      <div className="my-6">
        <AliceCarousel
          touchTracking={false}
          touchMoveDefaultEvents={false}
          infinite
          autoPlay={1000}
          animationDuration={1000}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
        />
      </div>
    </section>
  );
};

export default NFT;
