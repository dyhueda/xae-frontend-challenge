export default function Content(props) {
  return (
    <>
      <h1 className="font-bold text-5xl xl:text-7xl sm:font-semibold xl:font-bold">
        {props.title}
      </h1>
      <h3 className=" text-xs font-normal sm:text-sm xl:text-lg sm:font-light xl:font-medium">
        {props.content}
      </h3>
    </>
  );
}
