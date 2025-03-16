"use client";

import { getCurrentDate } from "./helper";

const Calendar = () => {
    const date = getCurrentDate()
  return (
    <span className="w-[33%] flex justify-start items-center">
      <div>{date}</div>
    </span>
  );
};

export default Calendar;