// If you don't use anything from React
// (e.g. hooks, interface, etc.), there's
// no need to have the import.

// Given that the React core team plans to drop
// the default export in the future,
// you should use the namespace
// import for future proofing your code.

import React from "react";

function LibrarySong({ song, setCurrentSong, audioRef, isPlaying, songs, setSongs }) {
  return (
    <div
      onClick={() => {
        // Extract this logic
        // in to a handler
        setCurrentSong(song);
        if (isPlaying) {
          async function waitForTheSong() {
            // There's no reason to use await
            // statement on an object
            await audioRef;
            audioRef.current.play();
          }
          waitForTheSong();
        }

        const updatedSongsList = songs.map(mappedSong => {
          return mappedSong.id === song.id ? { ...song, active: true } : { ...mappedSong, active: false };
        });
        setSongs(updatedSongsList);
      }}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={`${song.name} ${song.artist}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
