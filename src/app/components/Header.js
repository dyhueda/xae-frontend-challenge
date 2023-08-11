import NavigationButton from "./NavigationButton";
import ToggleTheme from "./ToggleTheme";

export default function Header(){
    return(

        <div className=" flex justify-end items-center md:gap-10 xl:gap-20 md:pt-5 xl:pt-10 mr-10">
            <ul className="flex md:text-base xl:text-xl gap-10">
                <NavigationButton title="Home" address='/' />
                <NavigationButton title="About" address='/about' />
                <NavigationButton title="Gallery" address='/gallery' />
                <NavigationButton title="Contact" address='/contact' />
            </ul>
            <div>
                <ToggleTheme />
            </div>
        </div>
    )
}