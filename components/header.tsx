import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Circle = styled(motion.span)`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
`;

const navVariants = {
  up: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};

export default function Header() {
  const router = useRouter();
  console.log(router);
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
  return (
    <motion.nav
      variants={navVariants}
      initial="up"
      animate={navAnimation}
      className="fixed top-0 w-screen h-[60px] flex justify-between items-center px-12"
    >
      <div className="text-xl sm:text-2xl font-bold text-gray-500 hover:text-white">
        <Link legacyBehavior href="/">
          <a className="flex flex-col items-center">
            <span>YSY's site</span>
          </a>
        </Link>
      </div>
      <div className="w-full max-w-sm flex justify-around text-lg sm:text-xl font-bold text-gray-500">
        <Link legacyBehavior href="/about">
          <a className="flex flex-col items-center space-y-2 hover:text-white">
            <span className="relative flex flex-col justify-center">
              About {router.route == "/about" && <Circle layoutId="circle" />}
            </span>
          </a>
        </Link>
        <Link legacyBehavior href="/study">
          <a className="relative flex flex-col items-center space-y-2 hover:text-white">
            <span className="relative flex flex-col justify-center">
              Study {router.route == "/study" && <Circle layoutId="circle" />}
            </span>
          </a>
        </Link>
        <Link legacyBehavior href="/work">
          <a className="relative flex flex-col items-center space-y-2 hover:text-white">
            <span className="relative flex flex-col justify-center">
              Work {router.route == "/work" && <Circle layoutId="circle" />}
            </span>
          </a>
        </Link>
      </div>
    </motion.nav>
  );
}
