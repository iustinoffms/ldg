import { useState } from "react";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function Speaker({ speaker, onFavouriteToggle }) {
  const { id, first, last, sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerInfo {...speaker} onFavouriteToggle={onFavouriteToggle} />
      </div>
      {showSessions === true ? <Sessions sessions={sessions} /> : null}
    </div>
  );
}

function SpeakerImage({ id, first, last }) {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerInfo({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favourite,
  onFavouriteToggle,
}) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <Favourite favourite={favourite} onFavouriteToggle={onFavouriteToggle} />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function Favourite({ favourite, onFavouriteToggle }) {
  const [inTransition, setInTrransition] = useState(false);

  function doneCallback() {
    console.log("I made it");
    setInTrransition(false);
  }

  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTrransition(true);
          return onFavouriteToggle(doneCallback);
        }}
      >
        <i
          className={
            favourite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fa fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function Sessions({ sessions }) {
  const { eventYear } = useContext(SpeakerFilterContext);
  return (
    <div className="sessionBox card h-250">
      {sessions
        .filter((session) => session.eventYear === eventYear)
        .map((session) => (
          <Session key={session.id} {...session} />
        ))}
    </div>
  );
}

function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

export default Speaker;
