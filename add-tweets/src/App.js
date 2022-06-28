import "./App.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const name = "iustin";
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div className="App">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetsList tweets={tweets} setTweets={setTweets} name={name} />
    </div>
  );
}

function CreateTweet({ textInput, setTextInput, tweets, setTweets }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTweets([...tweets, { message: textInput, id: uuidv4() }]);
          setTextInput("");
        }}
      >
        Create tweet
        <textarea
          cols="20"
          rows="5"
          value={textInput}
          required
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        ></textarea>
        <button>Send</button>
      </form>
    </>
  );
}

function TweetsList({ tweets, setTweets, name }) {
  return (
    <>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          name={name}
        />
      ))}
    </>
  );
}

function Tweet({ tweets, setTweets, name, tweet }) {
  return (
    <div className="tweet-box">
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button
        onClick={() => {
          setTweets(tweets.filter((state) => state.id !== tweet.id));
        }}
      >
        Delete
      </button>
      <button>Like</button>
    </div>
  );
}
