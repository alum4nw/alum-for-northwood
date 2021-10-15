import * as React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <div className="bg-blue-lightest text-center flex flex-col items-center justify-center pt-10 pb-12">
      <h1 className="font-header text-mh2 lg:text-h2">Upcoming Events</h1>
      <div className="flex pt-8 space-y-8 md:space-y-0 md:space-x-5 lg:space-x-9 md:flex-row flex-col">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default UpcomingEvents;
