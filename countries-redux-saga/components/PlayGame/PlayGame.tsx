import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegionCountries,
  getCountries,
} from "../../features/countriesSlice";

const PlayGame = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          dispatch(getCountries());
          router.push("/in-game");
        }}
      >
        Play game
      </button>
      <button
        onClick={() => {
          dispatch(getRegionCountries("asia"));
          router.push("/in-game");
        }}
      >
        Play Asia game
      </button>
    </div>
  );
};

export default PlayGame;
