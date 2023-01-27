import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import { Studys } from "../api/studys";

const offset = 1;

const Study: NextPage = () => {
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
    if (Studys) {
      if (leaving) return;
      toggleLeaving();
      const total = Studys.length;
      const maxIndex = Math.floor(total / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (Studys) {
      if (leaving) return;
      toggleLeaving();
      const total = Studys.length;
      const maxIndex = Math.floor(total / offset) - 1;
      const minIndex = 0;
      setIndex((prev) => (prev === minIndex ? maxIndex : prev - 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <>
      <Head>
        <title>YSY's Study</title>
      </Head>
      <Header />
      <svg
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="fixed top-[50vh] left-12 h-8 w-8 cursor-pointer"
        onClick={decreaseIndex}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        ></path>
      </svg>
      <div className="w-screen h-screen flex flex-col gap-6 items-center bg-black overflow-x-hidden">
        <div className="pt-12 flex items-center gap-6">
          <svg
            className="w-12 h-12"
            fill="gray"
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
          <h1 className="text-white text-[36px] font-extrabold">STUDY</h1>
        </div>
        <div className="relative w-[50vw] top-[20px] text-white">
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
            <motion.div
              key={index}
              initial={{ x: Window + 10 }}
              animate={{ x: 0 }}
              exit={{ x: -Window - 10 }}
              transition={{ type: "tween", duration: 1 }}
              className="absolute w-full grid grid-cols-6"
            >
              {Studys.slice(offset * index, offset * index + offset).map(
                (study) => (
                  <motion.div
                    className="relative w-[50vw] h-full flex flex-col gap-3 border-white border-2 py-6 px-4"
                    key={study.id}
                  >
                    <h2 className=" font-bold text-[28px] text-center">
                      {study.id}. {study.title}
                    </h2>
                    <img src={study.src} className="w-72 h-72 pt-4" />
                    <div className="text-[20px]">
                      <span>GITHUB : </span>
                      <Link legacyBehavior href={study.link}>
                        <a target="_blank" className="font-semibold">
                          <span>{study.link}</span>
                        </a>
                      </Link>
                    </div>
                    <p className="text-[16px]">{study.description}</p>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <svg
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="fixed top-[50vh] right-12 h-8 w-8 cursor-pointer"
        onClick={increaseIndex}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        ></path>
      </svg>
    </>
  );
};

export default Study;
