import * as React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <div className="bg-blue-lightest text-center flex flex-col items-center justify-center">
      <h1 className="font-header text-h2 pt-16 pb-5">Upcoming Events</h1>
      <div className="flex md:flex-row sm:flex-col pb-10">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default UpcomingEvents;
