"use client"
import { useState } from "react";
import NavigationButton from "./NavigationButton";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MenuIcon from "./icons/MenuIcon";
import TwitterIcon from "./icons/TwitterIcon";



export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex p-5 justify-between">
      <div className="text-4xl font-bold" >
        <h1>Xae</h1>
      </div>
      <div className="fixed right-5">
        <button onClick={handleOpen}>
          <MenuIcon />
        </button>
        {isOpen && (
          <div className="absolute right-1/2 z-50 rounded bg-[#2C4550]/90 p-8 animate-fade-down animate-once animate-duration-1000 animate-ease-out">
            <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4" >
              <NavigationButton title="Home" address="/"/>
              <NavigationButton title="About" address="/About" />
              <NavigationButton title="Gallery" address="/Gallery" />
              <NavigationButton title="Contact" address="/Contact" />
            </ul>
            <ul className="flex flex-col gap-4 ">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
