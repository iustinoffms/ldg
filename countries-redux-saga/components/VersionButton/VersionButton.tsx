import * as React from "react";

import { useDispatch } from "react-redux";
import { setVersion } from "../../features/countriesSlice";
interface VersionButtonProps {
  version: number;
}
const VersionButton = (props: VersionButtonProps) => {
  //improvements needed over here
  const [bgColor, setBgColor] = React.useState<any>("");

  const { version } = props;
  const dispatch = useDispatch();
  const onVersionSelect = (e: any) => {
    dispatch(setVersion(e.target.value));
    //improvements needed over here
    setBgColor("blue");
  };

  return (
    <button
      className="border-2 p-4 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
      style={{ background: bgColor }}
      value={version}
      onClick={onVersionSelect}
    >
      Play {version} countries version
    </button>
  );
};

export default VersionButton;
