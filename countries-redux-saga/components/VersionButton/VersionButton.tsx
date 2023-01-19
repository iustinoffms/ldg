import * as React from "react";
import { useDispatch } from "react-redux";

import { setVersion } from "../../features/countriesSlice";
import styles from "./VersionButton.module.css";
interface VersionButtonProps {
  version: number;
  disabled?: boolean;
}
const VersionButton = (props: VersionButtonProps) => {
  //improvements needed over here
  const [bgColor, setBgColor] = React.useState<any>("version-button");

  const { version, disabled } = props;
  const dispatch = useDispatch();
  const onVersionSelect = () => {
    dispatch(setVersion(Number(version)));
    setBgColor("selected-background-color");
  };
  const isDisabled = disabled ? disabled : false;
  const className = isDisabled ? styles["is-disabled"] : styles[`${bgColor}`];

  return (
    <button
      className={className}
      value={version}
      onClick={onVersionSelect}
      disabled={isDisabled}
    >
      Play {version} countries version
    </button>
  );
};

export default VersionButton;
