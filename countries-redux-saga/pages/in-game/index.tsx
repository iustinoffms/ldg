import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import DisplayFlag from "../../components/DisplayFlag/DisplayFlag";
import {
  getCountriesRequest,
  getOceaniaCountriesRequest,
  getRegionCountriesRequest,
  selectRequestStatus,
} from "../../features/countriesSlice";
import { Regions } from "../../components/PlayGame/PlayGame";
import BeforePlayDisplay from "../../components/BeforePlayDisplay/BeforePlayDisplay";

const InGame = () => {
  const { isLoading, error } = useSelector(selectRequestStatus);
  const { push, query } = useRouter();
  const region = query.region as string;

  const dispatch = useDispatch();

  const getTheList = React.useCallback(
    (region: string) => {
      if (region === Regions.ALL_COUNTRIES) {
        dispatch(getCountriesRequest());

        return;
      }
      if (region === Regions.OCEANIA) {
        dispatch(getOceaniaCountriesRequest());
      } else {
        dispatch(getRegionCountriesRequest(region));
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (!region) return;
    getTheList(region);
  }, [region, getTheList]);

  if (isLoading) {
    return <BeforePlayDisplay isLoading={isLoading} error={error} />;
  }

  if (error) {
    return <BeforePlayDisplay isLoading={isLoading} error={error} />;
  }
  return <DisplayFlag />;
};

export default InGame;
