import React, { FC } from "react";

const Icon = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`app-header__icon--${icon} fa-2x`}
    />
  );
};

const Header: FC = () => (
  <div className="app-header">
    <div className="app-header__group">
      <a href="/blog" className="app-header__item">
        <img src="/logo-banner.png" />
      </a>
    </div>
    <div className="app-header__group">
      <Icon href="https://github.com/grimkor" icon="github" />
    </div>
  </div>
);

export default Header;
