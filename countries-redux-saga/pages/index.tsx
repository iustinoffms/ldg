import type { NextPage } from "next";
import PlayGame from "../components/PlayGame/PlayGame";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-title text-5xl text-center  font-bold ">
        Welcome to Around the World Game!
      </h1>

      <PlayGame />
    </>
  );
};

export default Home;
