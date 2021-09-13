import * as React from "react";
import calendarIcon from "../images/calendarIcon.svg";
import timeIcon from "../images/timeIcon.svg";
import arrowIcon from "../images/arrowIcon.svg";

const EventCard = () => {
  return (
    <div class="container p-9 w-96">
      <div class="bg-white flex flex-col text-left border border-black rounded-xl p-6">
        <h4 class=" text-blue font-body text-xl">Event Name</h4>
        <div class="flex flex-row pt-4">
          <img src={calendarIcon} alt="calendar-icon"></img>
          <p class="font-body pl-2">Thu. Sep 02, 2021</p>
        </div>
        <div class="flex flex-row pt-1">
          <img src={timeIcon} alt="time-icon"></img>
          <p class="font-body pl-2">12:00 PM PDT</p>
        </div>
        <div class="flex flex-row pt-4">
          <img src={arrowIcon} alt="arrow-icon"></img>
          <a
            class="font-body pl-2 text-blue-dark"
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
