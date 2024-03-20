"use client";
import React, { useEffect } from "react";
import "../globals.css";

const Research = () => {
  return (
    <div id="research" className="w-full md:h-screen p-2 flex">
      <div className="max-w-[1240px] m-auto items-center">
        <div className="mb-12">
        <h2 className="text-[#cfcfcf] mb-2">
          Check out our latest research
        </h2>
        <p className="text-[#707173] box w-[500px]">
          Our research is focused on the latest trends in the cryptocurrency market.
          We are constantly updating our research to provide the most accurate
          information to our members. We are also working on a few projects
          that will be released soon. Stay tuned!
        </p>
        </div>
        <div className="carousel rounded-lg w-[800px] h-72">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="http://placehold.it/150x150"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle text-[#FF204E]">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle text-[#FF204E]">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="http://placehold.it/150x150"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle text-[#FF204E]">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle text-[#FF204E]">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="http://placehold.it/150x150"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle text-[#FF204E]">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle text-[#FF204E]">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="http://placehold.it/150x150"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle text-[#FF204E]">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle text-[#FF204E]">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
