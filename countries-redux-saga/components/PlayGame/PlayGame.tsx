import * as React from "react";

import PlayButton from "../PlayButton/PlayButton";
import VersionButton from "../VersionButton/VersionButton";

const PlayGame = () => {
  return (
    <>
      <div className="flex justify-around mt-20 ">
        <VersionButton version="10" />
        <VersionButton version="20" />
        <VersionButton version="30" />
      </div>
      <div className="grid gap-20 grid-cols-3 grid-rows-2 mt-20">
        <PlayButton />
        <PlayButton region="Asia" />
        <PlayButton region="Europe" />
        <PlayButton region="Oceania" />
        <PlayButton region="Americas" />
        <PlayButton region="Africa" />
      </div>
    </>
  );
};

export default PlayGame;
