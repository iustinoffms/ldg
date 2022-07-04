import * as React from "react";

function useUpdateSongList(initialValue) {
  const [songs, setSongs] = React.useState(initialValue ?? []);

  const updateSongList = React.useCallback(currentSong => {
    setSongs(prevSongs =>
      prevSongs.map(song => (song.id === currentSong.id ? { ...song, active: true } : { ...song, active: false }))
    );
  }, []);

  return [songs, updateSongList];
}

export default useUpdateSongList;
