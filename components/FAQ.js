import Image from "next/image";
import React from "react";

const FAQ = () => {
  return (
    <section
      id="about"
      className=" flex flex-col sm:px-14 px-6 py-10 justify-center text-center "
    >
      <h1 className="md:text-[60px] text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 via-red-500 to-yellow-500 py-6">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <Image
        className="w-full h-full "
        src='/about.jpg '
        alt="nft"
        width={900}
        height={900}
      />
    </section>
  );
};

export default FAQ;
