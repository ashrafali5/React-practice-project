import React, { useEffect, useState } from "react";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div className="flex items-center h-[90vh] justify-center">
      <div className="stopwatch-card shadow-soft">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono">
          {String(minutes).padStart(2, "0")} :{" "}
          {String(seconds).padStart(2, "0")} :{" "}
          {String(milliseconds).padStart(2, "0")}
        </h1>
        <div className="flex flex-row items-center gap-10 mt-16">
          <div>
            {isRunning ? (
              <FaRegPauseCircle
                onClick={() => setIsRunning(false)}
                className="cursor-pointer size-8 sm:size-12 hover:text-emerald-600 dark:hover:text-fuchsia-400"
              />
            ) : (
              <FaRegPlayCircle
                onClick={() => setIsRunning(true)}
                className="cursor-pointer size-8 sm:size-12 hover:text-emerald-600 dark:hover:text-fuchsia-400"
              />
            )}
          </div>
          <button>
            <GrPowerReset
              onClick={() => {
                setIsRunning(false);
                setTime(0);
              }}
              className="cursor-pointer size-8 sm:size-12 hover:text-emerald-600 dark:hover:text-fuchsia-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
