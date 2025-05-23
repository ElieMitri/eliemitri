import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/work1.png";
import work2 from "../../assets/Images/work2.png";
import work3 from "../../assets/Images/work3.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Educational Startup",
      year: "2022",
      img: work2,
      title: "YOUR BEST LIBRARY!",
      link: "https://library-beige-mu.vercel.app/",
      detail:
        "A digital library with curated resources, eBooks, and smart search, built for students and educators with responsive design.",
    },
    {
      client: "Independent Life Coach",
      year: "2024",
      img: work3,
      title: "PERSONAL COACHING WEBSITE",
      link: "https://elie-lifts.vercel.app",
      detail:
        "A modern coaching website with booking, blog, and testimonials, focused on clarity and user-friendly design.",
    },
    {
      client: "Confidential",
      year: "2025",
      img: work1,
      title: "TRAINIFAI",
      link: "https://trainif-ai.vercel.app",
      detail:
        "An AI-powered fitness platform offering personalized workout plans, real-time tracking, and adaptive routines using machine learning.",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <WorkCard item={item} />
                </a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
