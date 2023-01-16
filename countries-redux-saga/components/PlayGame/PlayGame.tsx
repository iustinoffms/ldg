import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getShortListCountries,
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
          dispatch(getShortListCountries());
          router.push("/in-game");
        }}
      >
        Get Short List Countries
      </button>
    </div>
  );
};

export default PlayGame;
