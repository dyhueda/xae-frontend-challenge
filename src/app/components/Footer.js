import Image from "next/image";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import AnimatedButton from "./AnimatedButton";

export default function Footer() {
  return (
    <div className="flex pl-7 sm:pl-16 xl:pl-32  footer-gradient w-screen sm:w-[calc(100vw-95px)] xl:w-[calc(100vw-162px)] sm:ml-24 xl:ml-40  ">
      <div className="aspect-[324/253] max-h-28 sm:max-h-40 xl:max-h-64">
        <Image
          src="https://i.postimg.cc/RCdzgjLd/Rectangle-3.png"
          width={324}
          height={253}
          alt="Picture of the author"
        />
      </div>
      <div className="pl-5 sm:pl-10 xl:pl-20 flex items-center gap-1 sm:gap-4">
        <div className="flex flex-col sm:w-96 xl:w-5/12 w-32 max-h-28 max-sm:line-clamp-4 ">
          <h2 className="text-xs sm:text-lg xl:text-2xl font-bold pb-1 sm:pb-4">Exploration</h2>
          <p className=" text-xs sm:text-xs xl:text-lg h-1/2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
            potenti faucibus nec, rhoncus, vulputate
          </p>
          <span className="hidden sm:flex justify-end p-2">
            <AnimatedButton button={<ArrowRightIcon />} />
          </span>
        </div>
        <div className="xl:flex flex-col w-max-5/12 hidden">
          <h2 className="text-2xl font-bold  pb-4">Footprint</h2>
          <p className="text-lg ">Lorem ipsum dolor sit amet, consectetur</p>
          <span className="flex justify-end p-2">
            <AnimatedButton button={<ArrowRightIcon />} />
          </span>
        </div>
      </div>
    </div>
  );
}
