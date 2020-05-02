import React, { FC } from "react";
import "../styles/index.scss";
import { AppProps } from "next/app";
import Layout from "../components/layout";

const BlogApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default BlogApp;
