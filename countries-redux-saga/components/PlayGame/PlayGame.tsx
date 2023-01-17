import * as React from "react";
import PlayButton from "../PlayButton/PlayButton";
const PlayGame = () => {
  const [version, setVersion] = React.useState<Number | null>();

  const onVersionSelect = (e: any) => {
    setVersion(Number(e.target.value));
  };
  console.log(version);
  return (
    <>
      <div className="grid gap-20 grid-cols-3 grid-rows-2 mt-20">
        <button value="10" onClick={onVersionSelect}>
          Play 10 countries version
        </button>
        <button value="20" onClick={onVersionSelect}>
          Play 20 countries version
        </button>
        <button value="30" onClick={onVersionSelect}>
          Play 30 countries version
        </button>
        <PlayButton />
        <PlayButton region="Asia" />
        <PlayButton region="Europe" />
        <PlayButton region="Oceania" />
        <PlayButton region="Americas" />
        <PlayButton region="Africa" />
      </div>
    </>
  );
};

export default PlayGame;
