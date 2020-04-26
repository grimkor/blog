import React, { FC } from "react";

const Link = ({ children, href }) => {
  return (
    <a href={href} className="header__item">
      {children}
    </a>
  );
};

const Icon = ({ icon, href }) => {
  return (
    <a href={href} target="_blank" className={`header__icon--${icon} fa-2x`} />
  );
};

const Header: FC = () => (
  <div className="header">
    <div className="header__group">
      <Link href="/">Home</Link>
      <Link href="/blog">Posts</Link>
    </div>
    <div className="header__group">
      <Icon href="https://github.com/grimkor" icon="github" />
    </div>
  </div>
);

export default Header;
