import React from "react";
import "../globals.css";

const LandingPage = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-8">
          <div className="text-left">
            <div>
              <h3 className="uppercase text-[#FF204E]">
                University of Cincinnati
              </h3>
              <h1 className="flex text-white items-center">
                Cryptocurrency Club
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-xl text-[#cfcfcf]">
                Shaping Future Innovators in the Digital Economy.
              </h1>
              <p className="mt-2 text-[#707173] box box-border lg:h-[120px] lg:w-[500px]">
                The{" "}
                <span className="text-[#FF204E]">UC Cryptocurrency Club</span>{" "}
                offers students hands-on learning in blockchain and{" "}
                cryptocurrency, supported by industry donations. With access to{" "}
                <span className="text-[#FF204E]">cutting-edge technology</span>{" "}
                and a dedicated fund, students are prepared for the digital
                economy and drive innovation at UC.
              </p>
              <button className="landingbtn mt-8">
                <span>Join the Future</span>
              </button>
            </div>
          </div>
          <div style={{ transform: "scale(0.8)", transformOrigin: "0 0" }}>
            <iframe
              className="rounded-lg shadow-lg"
              src="https://my.spline.design/bitcoinhit50k-f566bc6dd14d1392fd710e0944bdbe8d/"
              frameborder="0"
              width="125%"
              height="125%"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
