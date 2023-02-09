import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 3000);
  }, [hidden]);
  return (
    <div>
      {hidden ? (
        <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center bg-white">
          <svg
            className="w-12 h-12 cursor-pointer"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 
            001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          <h1 className="text-xl text-black font-bold">YSY's site</h1>
        </div>
      ) : (
        <>
          <Head>
            <title>YSY's site</title>
          </Head>
          <Header />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 3 }}
            className="w-screen h-screen sm:h-screen flex flex-col gap-10
            sm:gap-5 justify-center items-center py-10 overflow-x-hidden
            bg-[url('../public/background.jpg')]"
          >
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-white text-2xl sm:text-3xl font-extrabold">
                Hello!
              </h1>
              <span className="text-white text-center text-xl sm:text-2xl font-bold">
                This is My personal portfolio site!
                <br />I organized my personal projects and what I studied on
                this site.
              </span>
            </div>
            <div className="pt-6 flex items-center gap-4 sm:gap-6">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
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
              <h1 className="text-white text-[24px] sm:text-[30px] font-extrabold">
                SKILLS
              </h1>
            </div>
            <div className="w-1/2 h-[300px] flex flex-col items-center justify-center gap-6 pt-6">
              <div className="flex gap-6">
                <img src="Html.png" width="64px" height="64px" />
                <img src="CSS.png" width="64px" height="64px" />
                <img src="Javascript.png" width="64px" height="64px" />
                <img src="Typescript.png" width="64px" height="64px" />
              </div>
              <div className="flex gap-6">
                <img src="Nodejs.png" width="64px" height="64px" />
                <img src="ReactJs.png" width="64px" height="64px" />
              </div>
              <div className="flex gap-6">
                <img src="Gatsby.png" width="64px" height="64px" />
                <img src="NextJs.png" width="64px" height="64px" />
              </div>
              <div className="flex gap-6">
                <img src="Netlify.png" width="64px" height="64px" />
                <img src="Vercel.png" width="64px" height="64px" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Home;
