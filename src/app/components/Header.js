"use client"
import { useState } from "react";
import NavigationButton from "./NavigationButton";
import ToggleTheme from "./ToggleTheme";

export default function Header(){
    const[page , setPage] = useState("Home");
    console.log(page)
    return(

        <div className=" flex justify-end items-center md:gap-10 xl:gap-20 md:pt-5 xl:pt-10 mr-10">
            <ul className="flex md:text-base xl:text-xl gap-10">
                <NavigationButton title="Home" address='/' setPage={setPage} page={page}  />
                <NavigationButton title="About" address='/about' setPage={setPage} page={page}  />
                <NavigationButton title="Gallery" address='/gallery' setPage={setPage} page={page}  />
                <NavigationButton title="Contact" address='/contact'  setPage={setPage} page={page} />
            </ul>
            <div>
                <ToggleTheme />
            </div>
        </div>
    )
}