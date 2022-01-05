import * as React from "react";
import CalendarIcon from "../svg/calendarIcon.svg";
import TimeIcon from "../svg/timeIcon.svg";
import ArrowIcon from "../svg/arrowIcon.svg";

const EventCard = ({ name, date, time, cta = "Register for this event!" }) => {
  const IconInfo = ({ icon, children }) => {
    return (
      <div className="flex flex-row items-center">
        {icon}
        <p className="font-body text-body md:text-tbody lg:text-body pl-2">
          {children}
        </p>
      </div>
    );
  };

  return (
    <a
      href="https://mentorcenter.us/program/alum-for-northwood"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="container w-72 md:w-60 lg:w-80 group">
        <div
          className="bg-white flex flex-col text-left border border-black rounded-xl p-6 
                    hover:shadow-custom transform hover:-translate-x-1 hover:-translate-y-1"
        >
          <h4 className="text-blue-dark font-body text-mh4 lg:text-h4 group-hover:text-blue">
            {name}
          </h4>
          <div className="flex flex-col py-4 space-y-1">
            <IconInfo icon={<CalendarIcon />}>{date}</IconInfo>
            <IconInfo icon={<TimeIcon />}>{time}</IconInfo>
          </div>
          <div className="flex flex-row items-center">
            <ArrowIcon />
            <p className="font-body align-top text-body md:text-tbody lg:text-body mb-0.5 font-bold pl-2 text-blue-dark group-hover:text-blue">
              {cta}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
