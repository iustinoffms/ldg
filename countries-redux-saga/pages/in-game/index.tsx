import * as React from "react";
import DisplayFlag from "../../components/DisplayFlag/DisplayFlag";
import { useSelector } from "react-redux";

const InGame = () => {
  const isLoading = useSelector((state: any) => state.countries.isLoading);
  return (
    <div className="">
      {isLoading ? <div>Loading...</div> : <DisplayFlag />}
    </div>
  );
};

export default InGame;
