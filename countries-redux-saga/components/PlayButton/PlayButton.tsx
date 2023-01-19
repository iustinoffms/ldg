import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setRegion } from "../../features/countriesSlice";

interface PlayButtonProps {
  region?: string;
}

const PlayButton = (props: PlayButtonProps) => {
  const { region } = props;
  const { push } = useRouter();
  const dispatch = useDispatch();

  const onClickEventHandler = () => {
    // dispatch(setRegion(region));
    push(`/in-game?region=${region}`);
  };

  return (
    <button
      className="border-2  rounded-lg drop-shadow-2xl border-amber-300 mx-10 p-6 bg-amber-300 hover:bg-amber-200 hover:border-amber-200"
      value={region}
      onClick={onClickEventHandler}
    >
      Play the {region} game
    </button>
  );
};

export default PlayButton;
