import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import { Studys } from "../api/studys";

const Study: NextPage = () => {
  return (
    <div className="w-screen h-full flex flex-col gap-10 justify-start items-center bg-blue-200">
      <Head>
        <title>YSY's Study</title>
      </Head>
      <Header />
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
        <h1 className="text-black text-[36px] font-extrabold">STUDY</h1>
      </div>
      {Studys.map((study) => (
        <div
          key={study.id}
          className="w-2/3 flex flex-col justify-center gap-5"
        >
          <div className="flex flex-col justify-center gap-2 border-white border-2 px-6 py-2">
            <h2 className="font-bold text-[28px] text-center">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Study;
