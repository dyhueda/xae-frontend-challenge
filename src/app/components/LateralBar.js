import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function ComponentName() {
  return (
    <div className="absolute xl:pt-6 sm:pt-3 sm:w-24 xl:w-40 h-screen border-r-white border-r-[1px] m-0">
      <div className="flex flex-col justify-between h-full">
        <h1 className="xl:h-16 sm:h-8 text-center sm:font-medium xl:font-bold sm:text-3xl xl:text-5xl">Xae</h1>
        <div className="flex flex-col items-center sm:gap-9  sm:pb-12">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}
