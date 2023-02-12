import React from "react";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
const Footer = (props) => {
  return (
    <section id="contect">
      <div className=" flex flex-row justify-around border-t-2 border-black sm:px-32 px-6 py-6 sm:py-10 sm:mx-10 mx-5">
        <Link
          href="http://discord.gg/etherproject"
          className="text-3xl text-yellow-200 hover:text-yellow-600"
        >
          <BsDiscord />
        </Link>
        <Link
          href="https://twitter.com/ether"
          className="text-3xl  text-yellow-200 hover:text-yellow-600"
        >
          <BsTwitter />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
