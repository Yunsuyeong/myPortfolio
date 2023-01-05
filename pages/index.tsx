import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-blue-200">
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
    </div>
  );
};

export default Home;
