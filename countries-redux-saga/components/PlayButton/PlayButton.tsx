import { useDispatch, useSelector } from "react-redux";
import {
  getRegionCountries,
  getCountries,
} from "../../features/countriesSlice";

import { useRouter } from "next/router";

interface PlayButtonProps {
  region?: string;
}

const PlayButton = (props: PlayButtonProps) => {
  const { region } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const getFromRegionOrAllCountries = region
    ? getRegionCountries(region)
    : getCountries();

  const regionName = region ? region : "all countries";

  const onClickEventHandler = () => {
    dispatch(getFromRegionOrAllCountries);
    router.push("/in-game");
  };

  return (
    <button
      className="border-2  rounded-lg drop-shadow-2xl border-amber-300 mx-10 p-6 bg-amber-300 hover:bg-teal-600 hover:border-teal-600"
      value={regionName}
      onClick={onClickEventHandler}
    >
      Play the {regionName} game
    </button>
  );
};

export default PlayButton;
