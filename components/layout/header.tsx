import { useRouter } from "next/router";
import { FC } from "react";

const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a href={href} className="header__link">
      {children}
    </a>
  );
};

const Header: FC = () => (
  <div className="header">
    <Link href="/">Home</Link>
    <Link href="/blog">Posts</Link>
  </div>
);

export default Header;
