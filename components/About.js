import React from "react";
import Image from "next/image";
import nft3 from "../public/nft/nft3.jpeg";
const About = () => {
  return (
    <section
      id="founder"
      className=" flex flex-col flex-1 sm:px-14 px-6 py-14 text-white sm:py-20 sm:gap-14 gap-4 justify-center text-center sm:text-start "
    >
      <div className="flex items-center justify-center">
        <h1 className="md:text-[60px] text-3xl sm:text-4xl  font-bold font-poppins  text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500">
          FOUNDER VII
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row flex-1 justify-center items-center sm:gap-8 gap-4">
        <div className="flex flex-col gap-4 ">
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            @visionofviii story is a powerful testament to the power of
            creativity, hard work, and determination. By following his passion
            for art, @visionofviii was able to create something truly unique and
            meaningful .
          </p>
          {/* <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            Sakura Dreams is a collection of utility enabled NFTS. Sakura Dreams
            will provide physical business profits to the NFT holders.
          </p>
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            With in few days after mint we will kick off our physical business,
            which revenue will be distributed between holder.
          </p> */}
{/* 
          <p className="font-poppins text-3xl font-bold text-center text-red-900">
            Mint Soon
          </p> */}
        </div>
        <div>
          <Image
            className="rounded-2xl "
            src={nft3}
            alt="nft"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
