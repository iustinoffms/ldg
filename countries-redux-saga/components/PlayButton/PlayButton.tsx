import { useRouter } from "next/router";

import Button from "../Button/Button";

interface PlayButtonProps {
  region?: string;
}

const PlayButton = (props: PlayButtonProps) => {
  const { region } = props;
  const { push } = useRouter();

  const playButtonHandler = () => {
    push(`/in-game?region=${region}`);
  };

  return <Button onClick={playButtonHandler}>Play the {region} game</Button>;
};

export default PlayButton;
