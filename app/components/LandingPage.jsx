import React from "react";
import "../globals.css";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div id="home" className="w-full h-screen text-center relative">
      <div className="overflow-hidden flex-1 object-cover absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="/images/landingPageIMG.png"
        />
      </div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="mt-44 md:mt-0 grid grid-cols-1 md:grid md:grid-cols-2 gap-6 lg:gap-16">
          <div className="z-10 bg-[#030303] bg-opacity-70 rounded-lg p-4">
            <div className="text-left">
              <h3 className="uppercase text-[#bbfe64]">
                University of Cincinnati
              </h3>
              <h1 className="flex uppercase text-white items-center">
                Crypto Club
              </h1>
            </div>
            <div className="mt-6 text-left">
              <h1 className="text-xl text-[#cfcfcf]">
                Shaping Future Innovators in the Digital Economy.
              </h1>
              <p className="mt-2 text-[#cfcfcf] text-md lg:text-lg box box-border lg:h-[120px] lg:w-[500px]">
                The{" "}
                <span className="text-[#bbfe64]">UC Cryptocurrency Club</span>{" "}
                offers students hands-on learning in blockchain and{" "}
                cryptocurrency, supported by industry donations. With access to{" "}
                <span className="text-[#bbfe64]">cutting-edge technology</span>{" "}
                and a dedicated fund, students are prepared for the digital
                economy and drive innovation at UC.
              </p>
              <button className="landingbtn mt-8 flex justify-center items-center">
                <span>Join the Future</span>
              </button>
            </div>
          </div>
          <div>
            <div className="z-10 relative flex items-center justify-center">
              <iframe
                className="rounded-lg shadow-lg w-[390px] h-[280px] md:w-[360px] md:h-[355px] lg:w-[600px] lg:h-[390px]"
                src="https://my.spline.design/bitcoinhit50k-f566bc6dd14d1392fd710e0944bdbe8d/"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
