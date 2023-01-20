import type { NextPage } from "next";
import PlayGame from "../components/PlayGame/PlayGame";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className=" py-24">
        <h1 className="text-5xl text-center  text-amber-200 font-bold text-opacity-70">
          Welcome to Around the World Game!
        </h1>
      </div>

      <PlayGame />
    </>
  );
};

export default Home;
