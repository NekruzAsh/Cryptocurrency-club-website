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
            <h2 className="text-[#cfcfcf] mx-auto">
              <span className=" text-[#FF204E]">//&nbsp;</span> Meet our team
            </h2>
            <p className="text-lg text-[#707173] mx-auto text-center md:mx-0">
              Get to know the talented individuals shaping our vision
            </p>
          </div>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card w-[450px] glass">
            <figure>
              <img
                className="pt-8 rounded-lg h-80 w-96"
                src="/images/jack.jpeg"
                alt="Jack"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Truong (Jack) Luu</h2>
              <h4 className="text-[#bbfe64]">Research Team Lead</h4>
              <p className="text-sm text-[#cfcfcf]">
                Truong (Jack) Luu is Ph.D. candidate in Information Systems. His
                research focuses on understanding information privacy, trust,
                and cybersecurity associated with disruptive technologies such
                as sharing economy, blockchain, and AI. He has published, or has
                forthcoming, research in the Journal of Management Information
                Systems (JMIS), Computers in Human Behavior (CHB), and the
                Journal of Information Science (JIS), Americas' Conference on
                Information Systems (AMCIS), and Hawaii International Conference
                on System Sciences (HICSS). He has been awarded the University
                of Cincinnati's Digital Futures Fellowship for his work in
                cybercrime in decentralized fintech research. In terms of
                teaching, Jack enjoys teaching computer programming, applied
                machine learning/AI, and cybersecurity courses at both
                undergraduate and graduate levels.
              </p>
            </div>
          </div>
          <div className="card w-[450px] h-[550px] glass">
            <figure>
              <img className="pt-8 rounded-lg h-80 w-96" src="/images/ben.jpg" alt="Ben" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Benjamin Franks</h2>
              <h4 className="text-[#bbfe64]">Treasurer</h4>
              <p className="text-[#cfcfcf]">
                Benjamin Franks is a passionate student at the intersection of
                Cybersecurity and Blockchain technology. His goal as Treasurer
                is the spread the possibilities of the blockchain to his peers.
              </p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img src="http://placehold.it/360x240" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img src="http://placehold.it/360x240" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img src="http://placehold.it/360x240" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img src="http://placehold.it/360x240" alt="car!" />
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
