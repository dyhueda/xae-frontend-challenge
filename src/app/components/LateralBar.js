import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function ComponentName() {
  return (
    <div className="absolute pt-[24px] w-[161px] h-screen border-r-white border-r-[1px] m-0">
      <div className="flex flex-col justify-between h-full">
        <h1 className="h-[61px] text-center font-bold text-5xl">Xae</h1>
        <div className="flex w-[161px] flex-col items-center gap-[38px] pb-[52px]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}
