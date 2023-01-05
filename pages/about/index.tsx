import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/header";

const About: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-start items-center bg-blue-200">
      <Head>
        <title>About</title>
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
            fill-rule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414
        1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828
        0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2
        2 0 11-2.828-2.828l3-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className="text-black text-[36px] font-extrabold">ABOUT</h1>
      </div>
      <div className="w-2/3 h-1/2 pt-8 grid grid-cols-2 text-center bg-gray-100">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">이름 (name)</span>
          <p className="text-lg font-medium">
            윤수영 <br /> Yun Suyeong
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">생년월일 (Birth)</span>
          <p className="text-lg font-medium">1997-12-18</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">학력 (Academic Career)</span>
          <p className="text-lg font-medium">
            인천대학교(2016~) <br />
            Incheon National University(2016~)
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">전공 (Major)</span>
          <p className="text-lg font-medium">
            일어일문학과, 컴퓨터공학과(복수전공) <br />
            Department of Japanese Literature <br />
            Department of Computer Science(Double Major)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
