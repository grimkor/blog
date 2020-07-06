import React, { FC } from "react";
import { Header, Link, Logo, LogoContainer, NavContainer } from "./styled";

const Banner: FC = () => (
  <Header>
    {/*<div className="app-header__group">*/}
    {/*<a href="/blog" className="app-header__item">*/}
    {/*  <img src="/logo-banner.png" />*/}
    {/*</a>*/}
    {/*</div>*/}
    <LogoContainer>
      <Logo src="/logo-banner.png" />
    </LogoContainer>
    <NavContainer>
      <Link href="#">Blog</Link>
    </NavContainer>
  </Header>
);

export default Banner;
