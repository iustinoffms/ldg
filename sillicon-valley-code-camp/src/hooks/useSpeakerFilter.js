import { useState } from "react";

function useSpeakerFilter(startingEventYear) {
  const [showSessions, setshowSessions] = useState(false);
  const [eventYear, setEventYear] = useState(startingEventYear);
  const [searchQuerey, setSearchQuery] = useState("");

  const EVENT_YEARS = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ];

  return {
    showSessions,
    setshowSessions,
    EVENT_YEARS,
    eventYear,
    setEventYear,
    searchQuerey,
    setSearchQuery,
  };
}

export default useSpeakerFilter;
