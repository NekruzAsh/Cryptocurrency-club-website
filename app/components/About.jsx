"use client";
import React from "react";
import "../globals.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: "20px 40px 100px 60px",
  });

  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const LeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  };

  const RightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } },
  };

  return (
    <div id="about" className="w-full flex justify-center items-center">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          className="max-w-3xl"
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={textVariants}
        >
          <div className="mt-28">
          <h2 className="text-[#e8ddff] flex justify-center items-center">
            <span className=" text-[#bbfe64]">//&nbsp;</span> Meet our team
          </h2>
          <p className="text-lg text-[#707173] text-center mt- md:mx-0 mx-4">
      Get to know the talented individuals shaping our vision
      </p>
      </div>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card w-96 glass">
            <figure>
              <img
                src="http://placehold.it/360x240"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                src="http://placehold.it/360x240"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                src="http://placehold.it/360x240"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                src="http://placehold.it/360x240"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                src="http://placehold.it/360x240"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                src="http://placehold.it/360x240"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
