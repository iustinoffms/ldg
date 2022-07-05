import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    // It doesn't make much sesnse to
    // use a <nav/> here. This can be replaced
    // with a <header/>
    <nav>
      <h1>Wawes</h1>
      {/*
        A possible UX improvement can be
        to signal to the user in a visual way
        that the button's function alternates
        between presses.
      */}
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
