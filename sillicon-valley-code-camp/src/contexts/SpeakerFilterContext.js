import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ children }) {
  const {
    showSessions,
    setshowSessions,
    EVENT_YEARS,
    eventYear,
    setEventYear,
    searchQuerey,
    setSearchQuery,
  } = useSpeakerFilter("2019");
  return (
    <SpeakerFilterContext.Provider
      value={{
        showSessions,
        setshowSessions,
        EVENT_YEARS,
        eventYear,
        setEventYear,
        searchQuerey,
        setSearchQuery,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterProvider };
