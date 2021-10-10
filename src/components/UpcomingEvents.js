import * as React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <div className="bg-blue-lightest text-center flex flex-col items-center justify-center py-11">
      <h1 className="font-header text-mh2 md:text-h2">Upcoming Events</h1>
      <div className="flex md:flex-row flex-col">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default UpcomingEvents;
