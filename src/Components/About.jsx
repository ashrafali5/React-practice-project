import React from "react";
import cloveImg from "../assets/Clove.png";

const About = () => {
  return (
    <div>
      <div className="flex flex-row justify-center mt-20 items-center gap-10">
        <h1 className="tracking-wide text-4xl font-extrabold">About Clove<span className="text-blue-500">X</span></h1>
        <img className="size-100 rounded-full" src={cloveImg} alt="clove" />
      </div>
    </div>
  );
};

export default About;
