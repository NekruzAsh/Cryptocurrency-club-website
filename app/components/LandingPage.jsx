import React from "react";
import "../globals.css";

const LandingPage = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="mt-44 md:mt-0 grid grid-cols-1 md:grid md:grid-cols-2 gap-16">
          <div className="text-left">
            <div>
              <h3 className="uppercase text-[#FF204E]">
                University of Cincinnati
              </h3>
              <h1 className="flex text-white items-center">
                Crypto Club
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
          <div>
            <iframe
              className="rounded-lg shadow-lg w-[350px] h-[280px] md:w-[360px] md:h-[355px] lg:w-[500px] lg:h-[355px]"
              src="https://my.spline.design/bitcoinhit50k-d9b079432970913af1319d5298f226fb/"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
