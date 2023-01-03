import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";

interface ILayout {
  children: React.ReactNode;
  hasTabbar?: boolean;
}

export default function Layout({ children, hasTabbar }: ILayout) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <>
      {hasTabbar ? (
        <nav
          className="fixed top-0 right-0 max-w-lg flex justify-around items-end w-full py-2 text-xl font-bold
        text-white bg-green-400 border-t"
        >
          <Link legacyBehavior href="/">
            <a className="flex flex-col items-center space-y-2">
              <span>Home</span>
            </a>
          </Link>
          <Link legacyBehavior href="/study">
            <a className="flex flex-col items-center space-y-2">
              <span>Study</span>
            </a>
          </Link>
          <Link legacyBehavior href="/work">
            <a className="flex flex-col items-center space-y-2">
              <span>Work</span>
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="flex flex-col items-center space-y-2">
              <span>Contact</span>
            </a>
          </Link>
        </nav>
      ) : null}
      <div>{children}</div>
    </>
  );
}
