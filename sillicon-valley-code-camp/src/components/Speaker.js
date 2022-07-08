import { useState } from "react";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { SpeakerProvider, SpeakerContext } from "../contexts/SpeakerContext";
import SpeakerDelete from "./SpeakerDelete";

function Speaker({ speaker, updateRecord, insertRecord, deleteRecord }) {
  const { showSessions } = useContext(SpeakerFilterContext);

  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          <SpeakerInfo />
        </div>
        {showSessions === true ? <Sessions /> : null}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
}
// function ImageWithFallback({ src, ...prost }) {
//   const [error, setError] = useState(false);
//   const [imgSrc, setImgSrc] = useState(src);
//   function onError() {
//     if (!error) {
//       setImgSrc("/images/speaker-99999.jpg");
//       setError(true);
//     }
//   }
//   return <img src={imgSrc} {...props} onError={onError} />;
// }
function SpeakerImage() {
  //clasic way to get the id, first, last props
  const speakerObj = useContext(SpeakerContext);
  const { speaker } = speakerObj;
  const { id, first, last } = speaker;

  //nested destructuration
  // const {
  //   speaker: { id, first, last },
  // } = useContext(SpeakerContext);

  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      {/* <ImageWithFallback
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      /> */}
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerInfo() {
  const { speaker } = useContext(SpeakerContext);
  const { first, last, bio, company, twitterHandle, favourite } = speaker;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <Favourite />
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

function Favourite() {
  const { speaker, updateRecord } = useContext(SpeakerContext);
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
          updateRecord(
            { ...speaker, favourite: !speaker.favourite },
            doneCallback
          );
        }}
      >
        <i
          className={
            speaker.favourite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
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

function Sessions() {
  const { eventYear } = useContext(SpeakerFilterContext);
  const { speaker } = useContext(SpeakerContext);
  const sessions = speaker.sessions;
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
