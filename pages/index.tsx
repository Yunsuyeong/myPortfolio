import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center bg-green-200">
      <h1 className="text-black text-3xl font-extrabold">Hello!</h1>
      <h2 className="text-gray-900 text-2xl font-bold">
        My name is Suyeong Yun.
      </h2>
    </div>
  );
};

export default Home;
