
import Footer from "./Footer";
import Header from "./Header";



export default function HomePage() {
  return (
    <div className="bg-texture bg-no-repeat h-screen w-full sm:bg-right bg-more-right bg-[size:110%] sm:bg-[size:40%] ">
      <div className="sm:block hidden">

      <Header />
      </div>
      <div className="flex flex-col ml-7 pt-40 sm:ml-36 xl:ml-72 sm:pt-24 xl:pt-52 gap-5 sm:gap-10 w-60 sm:w-96">
        <h1 className="font-bold text-5xl xl:text-7xl sm:font-semibold xl:font-bold">
          Adventure Together
        </h1>
        <h3 className=" text-xs font-normal sm:text-sm xl:text-lg sm:font-light xl:font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras
          nullam porta id dolor arcu, quis.
        </h3>
      </div>
      <div className="absolute bottom-0">
        <Footer/>
      </div>
    </div>
  );
}
