import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/header";

const About: NextPage = () => {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center gap-10 py-8 bg-blue-200">
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
            fillRule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414
        1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828
        0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2
        2 0 11-2.828-2.828l3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h1 className="text-black text-[36px] font-extrabold">ABOUT</h1>
      </div>
      <div className="w-2/3 h-[400px] py-8 grid grid-cols-2 text-center bg-gray-100">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">이름 (name)</span>
          <p className="text-lg font-medium">윤수영 (Yun Suyeong)</p>
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
      <div className="pt-6 flex items-center gap-6">
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
        <h1 className="text-black text-[36px] font-extrabold">CONTACT</h1>
      </div>
      <div className="w-2/3 h-[240px] grid grid-cols-2 items-center bg-gray-100">
        <div className="flex gap-4 justify-center">
          <svg
            fill="black"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            ></path>
          </svg>
          <p className="text-[20px] text-center font-medium">010-OOOO-OOOO</p>
        </div>
        <div className="flex gap-4 justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            ></path>
          </svg>
          <p className="text-[20px] text-center font-medium">
            vanquishr12@gmail.com
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <p className="text-[20px] text-center font-medium">
            https://github.com/Yunsuyeong
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 248 204"
            className="h-8 w-8"
          >
            <path
              fill="#1d9bf0"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
            />
          </svg>
          <p className="text-[20px] text-center font-medium">
            https://twitter.com/OOOOO
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
