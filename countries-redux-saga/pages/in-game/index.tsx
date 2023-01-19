import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import DisplayFlag from "../../components/DisplayFlag/DisplayFlag";
import {
  getCountriesRequest,
  getOceaniaCountries,
  getRegionCountries,
  selectCountries,
  selectRegion,
  selectRequestStatus,
} from "../../features/countriesSlice";
import { Regions } from "../../components/PlayGame/PlayGame";

const InGame = () => {
  const countries = useSelector(selectCountries);
  const { isLoading, error } = useSelector(selectRequestStatus);
  const dispatch = useDispatch();
  const { push, query } = useRouter();
  const region = query.region as string;

  const getTheList = React.useCallback(
    (region: string) => {
      if (region === Regions.ALL_COUNTRIES) {
        dispatch(getCountriesRequest());

        return;
      }
      if (region === Regions.OCEANIA) {
        dispatch(getOceaniaCountries());
      } else {
        dispatch(getRegionCountries(region));
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (!region) return;
    getTheList(region);
  }, [region, getTheList]);

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;

  return <DisplayFlag />;
};

export default InGame;
