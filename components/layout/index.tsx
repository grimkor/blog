import React, { FC } from "react";
import Content from "./content";
import Header from "./header";

const Layout: FC = ({ children }) => (
  <div className="container">
    <Header />
    <Content>{children}</Content>
  </div>
);

export default Layout;
