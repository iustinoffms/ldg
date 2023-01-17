import * as React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import DisplayFlag from "../../components/DisplayFlag/DisplayFlag";
import { selectCountries } from "../../features/countriesSlice";

const InGame = () => {
  const countries = useSelector(selectCountries);
  const { push } = useRouter();

  React.useEffect(() => {
    if (countries.length === 0) {
      push("/");
    }
  }, []);

  if (countries.length === 0) return null;

  return <DisplayFlag />;
};

export default InGame;
