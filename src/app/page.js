import LateralBar from "./components/LateralBar";
import HomePage from "./components/HomePage";



export default function Home() {
  return (
    <div className="dark:gradient-custom-light min-w-screen min-h-screen dark:text-black text-white gradient-custom-dark">
      <LateralBar />
      <HomePage/>
    </div>
  );
}
