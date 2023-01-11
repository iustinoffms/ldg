import type { NextPage } from "next";
import PlayGame from "../components/PlayGame/PlayGame";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles["container"]}>
      <PlayGame />
    </div>
  );
};

export default Home;
