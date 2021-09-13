import * as React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <div class="bg-blue-dark text-center flex flex-col items-center justify-center">
      <h1 class="font-header text-5xl pt-16 pb-5 text-white">
        Upcoming Events
      </h1>
      <div class="flex md:flex-row sm:flex-col pb-10">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    </div>
  );
};

export default UpcomingEvents;
