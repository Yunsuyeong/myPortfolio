import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-green-200">
      <Layout hasTabbar>
        <Head>
          <title>Home</title>
        </Head>
        <div className="flex flex-col items-center">
          <h1 className="text-black text-3xl font-extrabold">Hello!</h1>
          <h2 className="text-gray-900 text-2xl font-bold">
            My name is Suyeong Yun.
          </h2>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
