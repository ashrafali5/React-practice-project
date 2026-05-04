import React from "react";
import developerImg from "../assets/developer.png";
import { Link } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { TiStopwatch } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";
const Hero = () => {
  return (
    // Main Container
    <div className="flex flex-col justify-center items-center">
      {/* Hero section image and paragraph */}

      <div className=" fade-up flex flex-col px-8 lg:flex-row-reverse justify-between m-15 items-center gap-5">
        <div>
          <img src={developerImg} alt="developer-image" className="w-150" />
        </div>
        <div className="flex flex-col justify-start gap-10 items-center">
          <h1 className="text-center font-bold text-7xl">
            Clove<span className="text-blue-500">X</span>
          </h1>
          <p className="max-w-2xl text-gray-400 leading-9">
            CloveX is a collection of small, practical projects built to
            strengthen real-world development skills. Each project focuses on
            solving problems, improving logic, and creating clean user
            interfaces. It’s a space where learning meets creativity and
            consistent growth.
          </p>
        </div>
      </div>

      {/* Mini Projects */}

      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl sm:text-5xl tracking-wider font-extrabold">
          Mini <span className="text-blue-500">Projects</span>
        </h1>
        <div className=" max-w-4xl mx-auto mb-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <Link to="/stopwatch">
            <button className="btn flex flex-row items-center gap-2">
              <span>
                <TiStopwatch size={24} />
              </span>
              StopWatch
            </button>
          </Link>
          <Link to="/digitalClock">
            <button className="btn flex flex-row items-center gap-2">
              <span>
                <FaRegClock size={24} />
              </span>
              Clock
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
