import * as React from "react";
import { useDispatch } from "react-redux";

import { setVersion } from "../../features/countriesSlice";
import Button from "../Button/Button";
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
  const versionButtonHandler = () => {
    dispatch(setVersion(Number(version)));
    setBgColor("selected-background-color");
  };

  return (
    <Button disabled={disabled} onClick={versionButtonHandler}>
      Choose {version} game{" "}
    </Button>
  );
};

export default VersionButton;
