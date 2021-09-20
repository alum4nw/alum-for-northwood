import * as React from "react";
import CalendarIcon from "../images/calendarIcon.svg";
import TimeIcon from "../images/timeIcon.svg";
import ArrowIcon from "../images/arrowIcon.svg";

const EventCard = () => {
  return (
    <div className="container p-9 w-96 group">
      <div className="bg-white flex flex-col text-left border border-black rounded-xl p-6">
        <h4 className="text-blue-dark font-body text-h4 group-hover:text-blue">
          Event Name
        </h4>
        <div className="flex flex-row items-center pt-4">
          <CalendarIcon />
          <p className="font-body text-body pl-2">Thu. Sep 02, 2021</p>
        </div>
        <div className="flex flex-row items-center pt-1">
          <TimeIcon />
          <p className="font-body text-body pl-2">12:00 PM PDT</p>
        </div>
        <div className="flex flex-row items-center pt-4">
          <ArrowIcon />
          <a
            className="font-body font-bold pl-2 text-blue-dark group-hover:text-blue"
            href="https://www.merriam-webster.com/dictionary/register"
          >
            Register for this event!
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
