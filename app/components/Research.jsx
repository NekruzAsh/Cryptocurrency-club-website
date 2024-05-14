"use client";
import React, { useEffect } from "react";
import "../globals.css";
import Link from "next/link";

const Research = () => {
  return (
    <div id="research" className="w-full md:h-screen p-2 flex">
      <div className="max-w-[1240px] m-auto items-center text-center">
        <div className="mb-12 mt-12 md:mt-0">
          <h2 className="text-[#cfcfcf] mb-2"><span className=" text-[#FF204E]">//</span> Check out our latest lab research</h2>
          <p className="text-[#707173] mx-auto text-lg box w-[350px] md:w-[500px] lg:w-[600px]">
            Our research is focused on the latest trends in the cryptocurrency
            market. We are also working on a few projects that will be released
            soon. Stay tuned!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="carousel carousel-center max-w-[400px] md:max-w-2xl lg:max-w-4xl p-4 space-x-4 bg-[#191a1e] rounded-box">
            
            <div id="item1" className="carousel-item">
            <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4541401" target="_blank">
              <img
                src="/images/1.png"
                className="rounded-box w-[370px] h-[370px] md:w-[400px] md:h-[400px]"
              />
              </Link>
            </div>
            <div id="item2" className="carousel-item">
              <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4757280" target="_blank">
              <img
                src="/images/2.png"
                className="rounded-box w-[370px] h-[370px] md:w-[400px] md:h-[400px]"
              />
              </Link>
            </div>
            <div id="item3" className="carousel-item">
              <Link href="https://scholarspace.manoa.hawaii.edu/items/dd70e48a-3e50-4f9f-83f4-d5a97a54146f" target="_blank">
              <img
                src="/images/3.png"
                className="rounded-box w-[370px] h-[370px] md:w-[400px] md:h-[400px]"
              />
              </Link>
            </div>
       </div>
       </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn bg-[#191a1e] btn-xs hover:text-[#FF204E] transform duration-300">1</a> 
            <a href="#item2" className="btn bg-[#191a1e] btn-xs hover:text-[#FF204E] transform duration-300">2</a> 
            <a href="#item3" className="btn bg-[#191a1e] btn-xs hover:text-[#FF204E] transform duration-300">3</a> 
          </div>
      </div>
    </div>
  );
};

export default Research;
