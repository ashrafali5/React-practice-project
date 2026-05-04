import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // getting Raw times from date
  const rawHours = time.getHours();
  const rawMinutes = time.getMinutes();
  const rawSeconds = time.getSeconds();

  // AM PM Logic
  const amPm = rawHours >= 12 ? "PM" : "AM";

  // converting to 12 hr format
  const hours12 = rawHours % 12 === 0 ? 12 : rawHours % 12;

  // Add leadings Zero
  const hours = hours12 < 10 ? `0${hours12}` : hours12;
  const minutes = rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes;
  const seconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds;

  // Date Logic
  const options = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  };
  const date = time.toLocaleDateString("en-IN", options);

  return (
    <div>
      <div className="h-[60vh] flex items-center justify-center">
        <div className="date-card">
          <div className=" flex items-baseline gap-3 text-4xl sm:text-6xl font-bold ">
            <div className="w-16 sm:w-32 text-center ">{hours}</div>
            <div>:</div>
            <div className="w-16 sm:w-32 text-center">{minutes}</div>
            <div>:</div>
            <div className="w-16 sm:w-32 text-center ">{seconds} </div>
            <div className="text-2xl sm:text-3xl">{amPm}</div>
          </div>
          <h1 className="text-gray-400 text-left w-74 sm:w-120 sm:text-2xl">
            {date}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
