import { useState } from "react";
import Featured from "../components/Featured";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { homeObjOne } from "../data/Data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Featured {...homeObjOne} />
    </>
  );
}
