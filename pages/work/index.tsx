import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/header";
import { Works } from "../api/works";
import { useEffect, useState } from "react";

const offset = 1;

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
  const variants = {
    entry: (isBack: boolean) => ({
      x: isBack ? -Window - 10 : Window + 10,
    }),
    animate: {
      x: 0,
    },
    exit: (isBack: boolean) => ({
      x: isBack ? Window + 10 : -Window - 10,
    }),
  };
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  const increaseIndex = () => {
    setBack(false);
    if (Works) {
      if (leaving) return;
      toggleLeaving();
      const total = Works.length;
      const maxIndex = Math.floor(total / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    setBack(true);
    if (Works) {
      if (leaving) return;
      toggleLeaving();
      const total = Works.length;
      const maxIndex = Math.floor(total / offset) - 1;
      const minIndex = 0;
      setIndex((prev) => (prev === minIndex ? maxIndex : prev - 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <>
      <Head>
        <title>YSY's Work</title>
      </Head>
      <Header />
      <motion.svg
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
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
      </motion.svg>
      <div className="w-screen h-screen flex flex-col gap-6 items-center bg-[url('../public/background.jpg')] overflow-x-hidden">
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
        <div className="relative w-[70vw] top-[20px] text-white">
          <AnimatePresence
            initial={false}
            custom={back}
            onExitComplete={toggleLeaving}
          >
            <motion.div
              key={index}
              custom={back}
              variants={variants}
              initial="entry"
              animate="animate"
              exit="exit"
              transition={{ type: "tween", duration: 1 }}
              className="absolute w-full grid grid-cols-6"
            >
              {Works.slice(offset * index, offset * index + offset).map(
                (work) => (
                  <motion.div
                    className="relative w-[70vw] h-[60vh] flex flex-col gap-3 border-white border-2 py-6 px-4"
                    key={work.id}
                  >
                    <h2 className="font-bold text-[28px] text-center">
                      {work.id}. {work.title}
                    </h2>
                    <div className="flex gap-12">
                      <img src={work.src} className="w-[35vw] h-[45vh]" />
                      <div className="flex flex-col gap-6 text-[16px]">
                        <div>
                          <span>Site : </span>
                          <Link legacyBehavior href={work.site}>
                            <a target="_blank" className="font-semibold">
                              <span>{work.site}</span>
                            </a>
                          </Link>
                        </div>
                        <div>
                          <span>GITHUB : </span>
                          <Link legacyBehavior href={work.link}>
                            <a target="_blank" className="font-semibold">
                              <span>{work.link}</span>
                            </a>
                          </Link>
                        </div>
                        <p className="text-[24px]">{work.description}</p>
                        <div className="flex flex-col items-center gap-6 text-[24px]">
                          <span>Tools</span>
                          <div className="flex gap-6">
                            {work.logos?.map((logo) => (
                              <img src={logo} width="64px" height="64px" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.svg
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
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
      </motion.svg>
    </>
  );
};

export default Work;
