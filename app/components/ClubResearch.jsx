import React from "react";

const ClubResearch = () => {
  return (
    <div id="clubresearch" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="flex flex-col w-full">
          <div className="mt-48">
            <p className="text-[#ff2032]">From members of the club</p>
          <h2 className="text-[#cfcfcf] mt-2">
            Club Research
          </h2>
        <p className="text-[#707173] text-lg mt-2">
          Here is some of the research that our club members have been working
        </p>
        </div>
          <div className="mt-12 grid h-20 card bg-[#191a1e] rounded-box place-items-center">
            content
          </div>
          <div className="divider"></div>
          <div className="grid h-20 card bg-[#191a1e] rounded-box place-items-center">
            content
          </div>
          <div className="divider"></div>
          <div className="grid h-20 card bg-[#191a1e] rounded-box place-items-center">
            content
          </div>
          <div className="divider"></div>
          <div className="grid h-20 card bg-[#191a1e] rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubResearch;
