import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/header";

const Work: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-start items-center bg-green-200">
      <Head>
        <title>YSY's Work</title>
      </Head>
      <Header />
      <div className="pt-24 flex items-center gap-6">
        <svg
          className="w-12 h-12"
          fill="gray"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414
        1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828
        0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2
        2 0 11-2.828-2.828l3-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className="text-black text-[36px] font-extrabold">WORK</h1>
      </div>
      <div className="flex flex-col items-center pt-12">
        <span className="text-gray-900 text-2xl font-bold">
          My name is Suyeong Yun. <br />
          <br />
          I am attending Incheon National University.
          <br />
          <br />
          I'm interested in Web programming. (frontend, backend)
        </span>
      </div>
    </div>
  );
};

export default Work;
