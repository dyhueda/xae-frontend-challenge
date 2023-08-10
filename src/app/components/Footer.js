import Image from "next/image";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import AnimatedButton from "./AnimatedButton";

export default function Footer() {
  return (
    <div className="footer-gradient w-[calc(100vw-162px)] ml-[162px] ">
      <div className="flex flex-row pl-[125px] ">
        <Image
          src="https://i.postimg.cc/RCdzgjLd/Rectangle-3.png"
          width={324}
          height={255}
          alt="Picture of the author"
        />
        <div className="pl-[83px] flex justify-around">
          <div className="flex flex-col pt-[53px] w-5/12 ">
            <h2 className="text-2xl font-bold pb-[18px]">Exploration</h2>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              id potenti faucibus nec, rhoncus, vulputate
            </p>
            <span className="flex justify-end p-2">
              <AnimatedButton button={<ArrowRightIcon />} />
            </span>
          </div>
          <div className="flex flex-col pt-[53px] w-5/12 animate-shake  ">
            <h2 className="text-2xl font-bold  pb-[18px]">Footprint</h2>
            <p className="text-lg ">Lorem ipsum dolor sit amet, consectetur</p>
            <span className="flex justify-end p-2">
              <AnimatedButton button={<ArrowRightIcon />} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
