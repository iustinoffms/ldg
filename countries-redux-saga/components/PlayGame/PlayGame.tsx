import * as React from "react";

import PlayButton from "../PlayButton/PlayButton";
import VersionButton from "../VersionButton/VersionButton";

export enum Regions {
  ASIA = "Asia",
  EUROPE = "Europe",
  OCEANIA = "Oceania",
  AMERICAS = "Americas",
  AFRICA = "Africa",
  ALL_COUNTRIES = "all countries",
}

export enum GameVersion {
  TEN_COUNTRIES = 10,
  TWENTY_COUNTRIES = 20,
  THIRTY_COUNTRIES = 30,
}
const PlayGame = () => {
  return (
    <>
      <div className="flex justify-around mt-20 ">
        <VersionButton version={GameVersion.TEN_COUNTRIES} />
        <VersionButton version={GameVersion.TWENTY_COUNTRIES} />
        <VersionButton version={GameVersion.THIRTY_COUNTRIES} />
      </div>
      <div className="grid gap-20 grid-cols-3 grid-rows-2 mt-20">
        <PlayButton region={Regions.ALL_COUNTRIES} />
        <PlayButton region={Regions.ASIA} />
        <PlayButton region={Regions.EUROPE} />
        <PlayButton region={Regions.OCEANIA} />
        <PlayButton region={Regions.AMERICAS} />
        <PlayButton region={Regions.AFRICA} />
      </div>
    </>
  );
};

export default PlayGame;
