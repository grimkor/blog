import React, { FC } from "react";

const Icon = ({ icon, href }) => {
  return (
    <a href={href} target="_blank" className={`header__icon--${icon} fa-2x`} />
  );
};

const Header: FC = () => (
  <div className="header">
    <div className="header__group">
      <a href="/blog" className="header__item">
        Blog
      </a>
    </div>
    <div className="header__group">
      <Icon href="https://github.com/grimkor" icon="github" />
    </div>
  </div>
);

export default Header;
