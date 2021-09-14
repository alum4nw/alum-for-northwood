import * as React from "react";
import calendarIcon from "../images/calendarIcon.svg";
import timeIcon from "../images/timeIcon.svg";
import arrowIcon from "../images/arrowIcon.svg";

const EventCard = () => {
  return (
    <div className="container p-9 w-96">
      <div className="bg-white flex flex-col text-left border border-black rounded-xl p-6">
        <h4 className="text-blue font-body text-h4">Event Name</h4>
        <div className="flex flex-row items-center pt-4">
          <img src={calendarIcon} alt="calendar-icon"></img>
          <p className="font-body text-body pl-2">Thu. Sep 02, 2021</p>
        </div>
        <div className="flex flex-row items-center pt-1">
          <img src={timeIcon} alt="time-icon"></img>
          <p className="font-body text-body pl-2">12:00 PM PDT</p>
        </div>
        <div className="flex flex-row items-center pt-4">
          <img src={arrowIcon} alt="arrow-icon"></img>
          <a
            className="font-body pl-2 text-blue-dark"
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
