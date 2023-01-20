import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/header";
import { Works } from "../api/works";
import { useEffect, useState } from "react";
import styled from "styled-components";

const offset = 1;

const WorkBox = styled(motion.div)`
  width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 24px 8px;
  gap: 20px;
  border-width: 2px;
`;

const Work: NextPage = () => {
  const [Window, setWindow]: any = useState();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindow(window.outerWidth);
    });
    const time = setTimeout(() => {
      setWindow(window.outerWidth);
    }, 0.0000000000000000001);

    return () => {
      window.removeEventListener("resize", () => {
        setWindow(window.outerWidth);
      });

      clearTimeout(time);
    };
  }, []);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (Works) {
      if (leaving) return;
      toggleLeaving();
      const total = Works.length;
      const maxIndex = Math.floor(total / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      console.log(total);
      console.log(maxIndex);
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <>
      <Head>
        <title>YSY's Work</title>
      </Head>
      <Header />
      <div
        className="w-screen h-screen flex flex-col gap-6 items-center bg-black"
        onClick={increaseIndex}
      >
        <div className="pt-12 flex items-center gap-6">
          <svg
            className="w-12 h-12"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414
        1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828
        0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2
        2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="text-white text-[36px] font-extrabold">WORK</h1>
        </div>
        <div className="relative top-[20px] text-white">
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
            <motion.div
              key={index}
              initial={{ x: Window + 10 }}
              animate={{ x: -300 }}
              exit={{ x: -Window - 10 }}
              transition={{ type: "tween", duration: 1 }}
              className="absolute w-full grid grid-cols-6"
            >
              {Works.slice(offset * index, offset * index + offset).map(
                (work) => (
                  <WorkBox key={work.id}>
                    <h2 className="font-bold text-[28px] text-center">
                      {work.id}. {work.title}
                    </h2>
                    <img src={work.src} className="w-72 h-72 pt-4" />
                    <div className="text-[20px]">
                      <span>GITHUB : </span>
                      <Link legacyBehavior href={work.link}>
                        <a target="_blank" className="font-semibold">
                          <span>{work.link}</span>
                        </a>
                      </Link>
                    </div>
                    <p className="text-[16px]">{work.description}</p>
                  </WorkBox>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Work;
