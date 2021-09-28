import * as React from "react";
import CalendarIcon from "../svg/calendarIcon.svg";
import TimeIcon from "../svg/timeIcon.svg";
import ArrowIcon from "../svg/arrowIcon.svg";

const EventCard = () => {
  const IconInfo = ({ icon, children }) => {
    return (
      <div className="flex flex-row items-center">
        {icon}
        <p className="font-body text-body pl-2">{children}</p>
      </div>
    );
  };

  return (
    <div className="container p-9 w-96 group">
      <div
        className="bg-white flex flex-col text-left border border-black rounded-xl p-6 
      hover:shadow-custom transform hover:-translate-x-1 hover:-translate-y-1"
      >
        <h4 className="text-blue-dark font-body text-h4 group-hover:text-blue">
          Event Name
        </h4>
        <div className="flex flex-col py-4 space-y-1">
          <IconInfo icon={<CalendarIcon />}>Thu. Sep 02, 2021</IconInfo>
          <IconInfo icon={<TimeIcon />}>12:00 PM PDT</IconInfo>
        </div>
        <div className="flex flex-row items-center">
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
