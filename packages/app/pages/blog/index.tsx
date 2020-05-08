import React from "react";
import Card from "../../components/blog/card/card";
import { NextPage } from "next";
import { PostInterface } from "../../types";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import Head from "next/head";

const { serverRuntimeConfig } = getConfig();

interface BlogListProps {
  data: PostInterface[];
}

const BlogList: NextPage<BlogListProps> = (props) => (
  <>
    <Head>
      <title>Grimkor Tech - Blog</title>
      <meta
        name="description"
        content="Blog on my thoughts and experiences as a web developer getting into self-hosting."
      />
    </Head>
    <div className="list">
      {props.data.map((post) => (
        <Card key={post.data.title} post={post} />
      ))}
    </div>
  </>
);

BlogList.getInitialProps = async () => {
  const res = await fetch(`${serverRuntimeConfig.API_URL}/posts`);
  if (res.ok) {
    const data = await res.json();
    return { data };
  } else {
    return { data: [] };
  }
};

export default BlogList;
