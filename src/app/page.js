import LateralBar from "./components/LateralBar";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="sm:dark:gradient-custom-light min-w-screen min-h-screen sm:dark:text-black text-white gradient-custom-dark">
      <div className="hidden sm:block">
        <LateralBar />
      </div>
      <div className="block sm:hidden">
        <Menu />
      </div>
      <HomePage />
    </div>
  );
}
