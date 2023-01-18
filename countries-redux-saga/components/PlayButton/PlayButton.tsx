import { useDispatch, useSelector } from "react-redux";
import {
  getRegionCountries,
  getCountries,
} from "../../features/countriesSlice";
import { setRegion } from "../../features/countriesSlice";
import { useRouter } from "next/router";

interface PlayButtonProps {
  region?: string;
}

const PlayButton = (props: PlayButtonProps) => {
  const { region } = props;
  const { push } = useRouter();
  const dispatch = useDispatch();

  const onClickEventHandler = () => {
    dispatch(setRegion(region));
    push("in-game");
  };

  // const getFromRegionOrAllCountries = region
  //   ? getRegionCountries(region)
  //   : getCountries();

  return (
    <button
      className="border-2  rounded-lg drop-shadow-2xl border-amber-300 mx-10 p-6 bg-amber-300 hover:bg-teal-600 hover:border-teal-600"
      value={region}
      onClick={onClickEventHandler}
    >
      Play the {region} game
    </button>
  );
};

export default PlayButton;
