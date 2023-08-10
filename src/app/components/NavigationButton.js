export default function NavigationButton(props) {
  return (
    <a href={props.address}>
      <button>{props.title}</button>
    </a>
  );
}
