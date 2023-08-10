import Image from "next/image";

export default function BackgroundImages() {
  return (
    <div className="absolute h-[898px] w-[1250px]">
      <div className="absolute h-full z-0">
        <Image
          src="/texture.png"
          width={1250}
          height={898}
          alt="Background Texture"
        /> 
        <div className="absolute h-full z-10">
        <Image
          src="/astronaut.png"
          width={323}
          height={242}
          alt="Background Astronaut"
        />
      </div>
      </div>
     
    </div>
  );
}
