import type { NextPage } from "next";

import PlayGame from "../components/PlayGame/PlayGame";

const Home: NextPage = () => {
  return (
    <div className=" flex flex-col justify-center gap-16 flex-1">
      <h1 className="text-title text-5xl text-center  font-bold ">
        Welcome to Around the World Game!
      </h1>

      <PlayGame />
    </div>
  );
};

export default Home;
