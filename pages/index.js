import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";
import NFT from "../components/NFT";
import About from "../components/About";
import RoadMap from "../components/RoadMap";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import "react-alice-carousel/lib/alice-carousel.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shotcut icon" href="/profile2.jpg" />
        <title>ETHER</title>
      </Head>

      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <MainHeading />
        <NFT />
        {/* <RoadMap /> */}
        <About />

        <FAQ />
        <Footer />
      </div>
    </>
  );
}
