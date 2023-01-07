import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home: NextPage = () => {
  const [hidden, setHidden] = useState(true);
  const toggle = () => setHidden((prev) => !prev);
  return (
    <div>
      {hidden ? (
        <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center white">
          <svg
            onClick={toggle}
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
          <h1 className="text-xl text-black font-bold">홈으로 이동</h1>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "keyframes", duration: 1.5 }}
            className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-blue-200"
          >
            <Head>
              <title>YSY's site</title>
            </Head>
            <Header />
            <div className="flex flex-col gap-10 justify-center items-center">
              <h1 className="text-black text-3xl font-extrabold">Hello!</h1>
              <span className="text-gray-900 text-2xl font-bold">
                This is My personal portfolio site!
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Home;
