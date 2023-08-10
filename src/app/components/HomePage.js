
import Footer from "./Footer";
import Header from "./Header";



export default function HomePage() {
  return (
    <div className=" bg-texture bg-no-repeat h-screen w-full bg-right bg-[size:50%]">
      <Header />
      <div className="flex flex-col pl-[287px] pt-[211px] gap-[34px]">
        <h1 className="text-7xl font-bold leading-[79.2px] w-[393px] ">
          Adventure Together
        </h1>
        <h3 className="text-lg font-medium w-[524px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras
          nullam porta id dolor arcu, quis.
        </h3>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
