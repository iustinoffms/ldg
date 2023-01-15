import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCountries, getCountries } from "../../features/countriesSlice";

const PlayGame = () => {
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getCountries());
  // }, [dispatch]);

  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(getCountries());
          console.log(countries);
          // router.push("/in-game");
        }}
      >
        Play game
      </button>
    </div>
  );
};

export default PlayGame;
