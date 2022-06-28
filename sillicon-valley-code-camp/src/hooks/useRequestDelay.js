import { useState, useEffect } from "react";

// import { data as JSONData } from "../../SpeakerData";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

function useRequestDelay(delayTime = 1750, initialData = []) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunction() {
      try {
        await delay(delayTime);
        // throw "No data to display";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
        // setData(JSONData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunction();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map((speaker) =>
      speaker.id === recordUpdated.id ? recordUpdated : speaker
    );

    async function delayFunction() {
      try {
        setData(newRecords);
        await delay(delayTime);
        if (doneCallback) doneCallback();
      } catch (e) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) doneCallback();
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  return { data, requestStatus, error, updateRecord };
}

export default useRequestDelay;
