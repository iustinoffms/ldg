import Speaker from "./Speaker";
import useRequestDelay from "../hooks/useRequestDelay";
import { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function SpeakersList() {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(1000, data);

  const { searchQuerey, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE)
    return <div>Error occured: {error}</div>;
  if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>;
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData
          .filter(
            (speaker) =>
              speaker.first.toLowerCase().includes(searchQuerey) ||
              speaker.last.toLowerCase().includes(searchQuerey)
          )
          .filter((speaker) =>
            speaker.sessions.find((session) => session.eventYear === eventYear)
          )

          .map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                onFavouriteToggle={(doneCallback) => {
                  updateRecord(
                    { ...speaker, favourite: !speaker.favourite },
                    doneCallback
                  );
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
export default SpeakersList;
