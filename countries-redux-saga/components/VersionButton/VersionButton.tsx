import * as React from "react";
import { useDispatch } from "react-redux";

import { setVersion } from "../../features/countriesSlice";
import Button from "../Button/Button";

interface VersionButtonProps {
  version: number;
  disabled?: boolean;
}
const VersionButton = (props: VersionButtonProps) => {
  const { version, disabled } = props;
  const [versionBgColor, setVersionBgColor] = React.useState<string>("");
  const dispatch = useDispatch();

  const versionButtonHandler = () => {
    dispatch(setVersion(Number(version)));
    setVersionBgColor("bg-text");
  };

  return (
    <Button
      disabled={disabled}
      onClick={versionButtonHandler}
      versionBgColor={versionBgColor}
    >
      Choose {version} countries version
    </Button>
  );
};

export default VersionButton;
