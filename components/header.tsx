import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const Circle = styled(motion.span)`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: red;
`;

const navVariants = {
  up: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "rgba(128,128,128,1)",
  },
  scroll: {
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgba(0,0,0,1)",
  },
};

export default function Header() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 60) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("up");
      }
    });
  }, [scrollY, navAnimation]);
  const [Window, setWindow]: any = useState();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindow(window.innerWidth);
    });
    const time = setTimeout(() => {
      setWindow(window.innerWidth);
    }, 0.0000000000000000001);
    return () => {
      window.removeEventListener("resize", () => {
        setWindow(window.innerWidth);
      });
      clearTimeout(time);
    };
  }, []);
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(true);
  const onBack = () => setClicked(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="up"
      animate={navAnimation}
      className="z-[99] w-screen h-[50px] fixed top-0"
    >
      <div className="flex justify-between items-center px-12 pt-1">
        <div className="text-2xl font-bold hover:text-blue-300">
          <Link legacyBehavior href="/">
            <a className="flex flex-col items-center">
              <span>YSY's site</span>
            </a>
          </Link>
        </div>
        {Window >= 640 && (
          <div className="w-full max-w-sm flex justify-around items-center text-lg sm:text-xl font-bold">
            <Link legacyBehavior href="/about">
              <a className="flex flex-col items-center space-y-2 hover:text-blue-300">
                <span className="relative flex flex-col justify-center">
                  About{" "}
                  {router.route == "/about" && <Circle layoutId="circle" />}
                </span>
              </a>
            </Link>
            <Link legacyBehavior href="/study">
              <a className="relative flex flex-col items-center space-y-2 hover:text-blue-300">
                <span className="relative flex flex-col justify-center">
                  Study{" "}
                  {router.route == "/study" && <Circle layoutId="circle" />}
                </span>
              </a>
            </Link>
            <Link legacyBehavior href="/work">
              <a className="relative flex flex-col items-center space-y-2 hover:text-blue-300">
                <span className="relative flex flex-col justify-center">
                  Work {router.route == "/work" && <Circle layoutId="circle" />}
                </span>
              </a>
            </Link>
          </div>
        )}
        {Window < 640 && (
          <svg
            className="h-8 w-8 cursor-pointer"
            onClick={onClick}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        )}
        {Window < 640 && clicked && (
          <div className="absolute top-0 w-screen h-screen flex flex-col gap-6 bg-blue-200">
            <svg
              onClick={onBack}
              fill="#000000"
              className="top-0 h-6 w-6 cursor-pointer"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 460.775 460.775"
            >
              <path
                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
              />
            </svg>
            <Link legacyBehavior href="/about">
              <a className="flex flex-col items-center space-y-2 hover:text-white">
                <span className="relative flex flex-col justify-center">
                  About
                </span>
              </a>
            </Link>
            <Link legacyBehavior href="/study">
              <a className="flex flex-col items-center space-y-2 hover:text-white">
                <span className="relative flex flex-col justify-center">
                  Study
                </span>
              </a>
            </Link>
            <Link legacyBehavior href="/work">
              <a className="flex flex-col items-center space-y-2 hover:text-white">
                <span className="relative flex flex-col justify-center">
                  Work
                </span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
