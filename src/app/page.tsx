import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Programme from "./components/Programme/programe";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Programme/>
      <Footer/>
    </div>
  )
}