import { useRouter } from "next/router";
import { FC } from "react";

const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};

const Header: FC = () => (
  <div className="header">
    <Link href="/">Home</Link>
    <Link href="/blog">About</Link>
  </div>
);

export default Header;
