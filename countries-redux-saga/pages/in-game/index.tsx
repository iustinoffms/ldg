import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import DisplayFlag from "../../components/DisplayFlag/DisplayFlag";
import {
  getCountries,
  getRegionCountries,
  selectCountries,
  selectRegion,
} from "../../features/countriesSlice";
import { Regions } from "../../components/PlayGame/PlayGame";

const InGame = () => {
  const countries = useSelector(selectCountries);
  const region = useSelector(selectRegion);
  const isLoading = useSelector((state: any) => state.countries.isLoading);
  const dispatch = useDispatch();
  const { push } = useRouter();

  console.log("region in-game", region);

  // const getFromRegionOrAllCountries = region
  //   ? getRegionCountries(region)
  //   : getCountries();

  // React.useEffect(() => {
  //   if (countries.length === 0) {
  //     push("/");
  //   }
  // }, [countries.length, push]);

  React.useEffect(() => {
    if (region === Regions.ALL_COUNTRIES) {
      dispatch(getCountries());
    } else {
      dispatch(getRegionCountries());
    }
  }, [dispatch, Regions.ALL_COUNTRIES]);
  if (countries.length === 0) return null;

  return isLoading ? <div>Loading</div> : <DisplayFlag />;
};

export default InGame;
