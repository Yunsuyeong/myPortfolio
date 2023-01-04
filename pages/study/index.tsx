import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/header";

const Study: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-green-200">
      <Head>
        <title>YSY's Study</title>
      </Head>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="text-black text-3xl font-extrabold">Hello!</h1>
        <h2 className="text-gray-900 text-2xl font-bold">
          My name is Suyeong Yun.
        </h2>
      </div>
    </div>
  );
};

export default Study;
