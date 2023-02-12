import React from "react";
import nft5 from "../public/nft/nft5.jpeg";
import Image from "next/image";
const RoadMap = () => {
  return (
    <section
      id="utility"
      className="bg flex flex-col flex-1 
      
      
      
      sm:gap-14 gap-4 justify-center text-center sm:text-start"
    >
      <div className="flex items-center justify-center">
        <h1 className="md:text-7xl text-3xl sm:text-5xl  font-bold font-poppins text-red-900">
          UTILITY
        </h1>
      </div>

      <div className="flex  flex-col-reverse sm:flex-row flex-1 justify-center items-center sm:gap-8 gap-4">
        <div>
          <Image
            className="rounded-2xl "
            src={nft5}
            alt="nft"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            Sakura Dreams originated on the Avalanche Blockchain. Our goal is to
            integrate web2 and web3 through real life businesses and share the
            profits to the holders
          </p>
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            our focus is to be the intersection where different roads meet.
          </p>
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold"></p>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
