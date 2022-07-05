import React from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";
import { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  // Given that you have a ref set on the <audio/>
  // element, you should use it to determine if the track
  // is playing
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Track duration & current time can be read from
  // the audioRef
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Use appropriate variable/fn names
  // Reading the name should give the reader
  // a clear idea of the purpose of it
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = e => {
    // Given that the duration of any track
    // does not change while it's playing,
    // setting this value should be done once
    // on the 1st render
    setSongInfo({
      ...songInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const endedSongHandler = () => {
    const currentSongIndex = songs.findIndex(song => song.id === currentSong.id);

    setTimeout(() => {
      setCurrentSong(songs[currentSongIndex + 1]);
    }, 1500);
  };

  return (
    <div className={`App ${libraryStatus ? "library-on" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      {/*
        This can be extracted into a separate component
        in order to keep the <App/> as lean as it currently is
      */}
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={endedSongHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
