import NavigationButton from "./NavigationButton";
import ToggleTheme from "./ToggleTheme";

export default function Header(){
    return(
        <div className="flex justify-end gap-[79px] pt-[39px]">
            <div className="flex align-center gap-[40px]">
                <NavigationButton title="Home" address='/' />
                <NavigationButton title="About" address='/about' />
                <NavigationButton title="Gallery" address='/gallery' />
                <NavigationButton title="Contact" address='/contact' />
            </div>
            <div className="block w-[35px] h-[35px] mr-[41px]">
                <ToggleTheme />
            </div>
        </div>
    )
}