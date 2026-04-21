import React from "react";
import developerImg from "../assets/developer.png";

const Hero = () => {
  return (
    <div>
      <div className=" fade-up flex flex-col px-8 lg:flex-row-reverse justify-between m-15 items-center gap-5">
        <div>
          <img src={developerImg} alt="developer-image" className="w-150" />
        </div>
        <div className="flex flex-col justify-start gap-10 items-center">
          <h1 className="text-center font-bold text-7xl">
            Clove<span className="text-blue-500">X</span>
          </h1>
          <p className="max-w-2xl text-gray-400 leading-9">
            At CloveX, we turn ideas into powerful digital experiences using
            cutting-edge web technologies. As a MERN stack developer, we
            specialize in building fast, scalable, and user-friendly
            applications with MongoDB, Express.js, React, and Node.js. Whether
            it’s a dynamic web app or a full-scale platform, our focus is on
            clean code, performance, and seamless user interaction. CloveX isn’t
            just about development—it’s about crafting solutions that are
            efficient, reliable, and built for the future.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-10 gap-5 ">
        <button className="btn">Calculator</button>
        <button className="btn">Profile Card</button>
      </div>
    </div>
  );
};

export default Hero;
