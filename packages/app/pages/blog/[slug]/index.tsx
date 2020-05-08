import React from "react";
import { NextPage } from "next";
import matter from "gray-matter";
import fetch from "isomorphic-unfetch";
import Post from "../../../components/blog/post";
import { PostInterface } from "../../../types";
import getConfig from "next/config";
import Head from "next/head";

const { serverRuntimeConfig } = getConfig();

interface BlogPostProps {
  data: PostInterface;
}

const BlogPost: NextPage<BlogPostProps> = (props) => (
  <>
    <Head>
      <title>Grimkor Tech - {props.data.data.title}</title>
      <meta property="description" content={props.data.data.description} />
    </Head>
    <Post data={props.data} />
  </>
);

BlogPost.getInitialProps = async (context): Promise<BlogPostProps> => {
  const { slug } = context.query;
  const file: string = slug instanceof Array ? slug[0] : slug;
  const res = await fetch(
    `${serverRuntimeConfig.API_URL}/post/${file}`.toLowerCase()
  );

  if (res.ok) {
    // @ts-ignore
    const data: PostInterface = matter(await res.text());
    return { data };
  } else {
    return {
      data: {
        content: "Mistakes were made.",
        excerpt: "",
        data: { title: "ERROR", date: "", readingTime: "-1 minutes" },
      },
    };
  }
};

export default BlogPost;
