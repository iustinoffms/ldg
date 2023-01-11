import { useRouter } from "next/router";
import * as React from "react";

const PlayGame = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/in-game");
        }}
      >
        Play game
      </button>
    </div>
  );
};

export default PlayGame;
