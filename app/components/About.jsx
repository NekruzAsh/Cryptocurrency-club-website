import React from "react";
import "../globals.css";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex flex-col items-center justify-center">
    
      <div className="mt-48 mb-36">
      <h2 className="text-[#cfcfcf] text-center mb-2">
        Meet our team
      </h2>
      <p className="text-lg text-[#707173] text-center md:mx-0 mx-4">
      Get to know the talented individuals shaping our vision
      </p>
      </div>
      <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
        <div className="avatar text-center">
          <div className="w-40 mx-auto rounded-full ring ring-[#FF204E] ring-offset-base-100 ring-offset-2">
            <img src="/images/1.jpg" />
          </div>
          <p>Team member description</p>
        </div>
        <div className="avatar text-center">
          <div className="w-40 mx-auto rounded-full ring ring-[#FF204E] ring-offset-base-100 ring-offset-2">
            <img src="/images/1.jpg" />
          </div>
          <p>Team member description</p>
        </div>
        <div className="avatar text-center">
          <div className="w-40 mx-auto rounded-full ring ring-[#FF204E] ring-offset-base-100 ring-offset-2">
            <img src="/images/1.jpg" />
          </div>
          <p>Team member description</p>
        </div>
        <div className="avatar text-center">
          <div className="w-40 mx-auto rounded-full ring ring-[#FF204E] ring-offset-base-100 ring-offset-2">
            <img src="/images/1.jpg" />
          </div>
          <p>Team member description</p>
        </div>
        <div className="avatar text-center">
          <div className="w-40 mx-auto rounded-full ring ring-[#FF204E] ring-offset-base-100 ring-offset-2">
            <img src="/images/1.jpg" />
          </div>
          <p>Team member description</p>
        </div>
        <div className="avatar text-center">
          <div className="w-40 mx-auto rounded-full ring ring-[#FF204E] ring-offset-base-100 ring-offset-2">
            <img src="/images/1.jpg" />
          </div>
          <p>Team member description</p>
        </div>
      </div>
    </div>
  );
};

export default About;