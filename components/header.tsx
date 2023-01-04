import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

export default function Header() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <nav className="fixed top-5 left-10 text-2xl font-bold text-gray-700 hover:text-gray-900">
        <Link legacyBehavior href="/">
          <a className="flex flex-col items-center space-y-2">
            <span>YSY's site</span>
          </a>
        </Link>
      </nav>
      <nav
        className="fixed top-5 right-5 max-w-lg flex justify-around items-end w-full py-2 text-xl font-bold
       text-gray-500"
      >
        <Link legacyBehavior href="/about">
          <a className="flex flex-col items-center space-y-2 hover:text-white">
            <span>About</span>
          </a>
        </Link>
        <Link legacyBehavior href="/study">
          <a className="flex flex-col items-center space-y-2 hover:text-white">
            <span>Study</span>
          </a>
        </Link>
        <Link legacyBehavior href="/work">
          <a className="flex flex-col items-center space-y-2 hover:text-white">
            <span>Work</span>
          </a>
        </Link>
      </nav>
    </div>
  );
}
