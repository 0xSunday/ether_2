import React, { useState } from "react";
import { getFilteredAddress } from "../../WLData";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";
import Confetti from "react-confetti";
// import
const index = () => {
  const [wl, setWl] = useState("");
  const [address, setAddress] = useState("");
  const [output, setOutput] = useState("");
  const wlhander = (event) => {
    const addressWL = getFilteredAddress(event.target.value);
    setAddress(addressWL);
    setWl(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (wl.length > "0") {
      if (address && wl.length == "42") {
        setOutput("You Are Whitelisted");
        // console.log("you are whitelisted");
        // console.log(address);
      }
      if (!address && wl.length == "42") {
        setOutput("You Are Not Whitelisted");
        // console.log("you are not whitelisted");
      }
      if (wl.length != "42") {
        setOutput("Enter a valid address");

        // console.log("you are whitelisted");
        // console.log(address);
      }
      setWl("");
    }

    setWl("");
  };

  return (
    <section className="flex flex-col  ">
      <div>
        <nav className="w-full flex py-6 sm:py-8 sm:px-8 px-4 justify-between items-center navbar text-black  ">
          <h2>
            <a
              href="/"
              className="md:text-[50px] text-3xl text-black font-bold  font-rubik2 "
            >
              Sakura Dreams
            </a>
          </h2>
        </nav>

        <form
          className="flex justify-center p-3 py-6 sm:py-8 sm:px-8 px-4"
          onSubmit={handleClick}
        >
          <input
            type="text"
            className="border-2 sm:w-[500px] w-full h-8 rounded-xl p-5 mr-5 shadow-black  shadow-2xl outline-none hover:shadow-inner"
            onChange={wlhander}
            value={wl}
            id="username"
            placeholder="Address"
          />
          <button
            type="submit"
            className="border-2 font-semibold h-8 rounded-xl p-5 shadow-black shadow-2xl flex justify-center items-center text-center outline-none hover:shadow-inner"
          >
            Check
          </button>
        </form>
        <div className="flex text-center justify-center py-6 sm:py-8 sm:px-8 px-4 ">
          <h1 className="flex text-center text-3xl sm:text-7xl font-bold ">
            {output}
          </h1>
          {output == "You Are Whitelisted" && <Confetti />}
        </div>
      </div>

      <div className=" flex flex-row justify-around border-t-2 border-black sm:px-32 px-6 py-6 sm:py-10 sm:mx-10 mx-5 bottom-0 right-0 left-0 absolute">
        <Link
          href="https://discord.gg/zt8Ra3pKJ8"
          className="text-3xl text-pink-900 hover:text-black"
        >
          <BsDiscord />
        </Link>
        <Link
          href="https://twitter.com/SakuraDreamsNFT"
          className="text-3xl  text-pink-900  hover:text-black"
        >
          <BsTwitter />
        </Link>
        <Link
          href="mailto:chillgirlsavax@gmail.com"
          className="text-3xl   text-pink-900  hover:text-black"
        >
          <AiTwotoneMail />
        </Link>
      </div>
    </section>
  );
};

export default index;
