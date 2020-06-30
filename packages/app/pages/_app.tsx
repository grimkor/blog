import React, { FC } from "react";
import "../styles/index.scss";
import { AppProps } from "next/app";
import Layout from "../components/layout";
// import "highlight.js/styles/a11y-dark.css";
import "highlight.js/styles/darcula.css";

const BlogApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default BlogApp;
