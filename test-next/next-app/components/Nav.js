import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Movies">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
