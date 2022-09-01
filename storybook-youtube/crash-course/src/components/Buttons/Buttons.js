import "./Buttons.css";
export default function Buttons({ name, classname, clicked }) {
  return (
    <button onClick={clicked} className={classname}>
      {name}
    </button>
  );
}
