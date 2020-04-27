import React from "react";
import { NextPage } from "next";
import matter from "gray-matter";
import fetch from "isomorphic-unfetch";
import Post from "../../components/blog/post";
import { PostInterface } from "../../types";

interface BlogPostProps {
  data: PostInterface;
}

const BlogPost: NextPage<BlogPostProps> = (props) => <Post data={props.data} />;

BlogPost.getInitialProps = async (context): Promise<BlogPostProps> => {
  const { slug } = context.query;
  const file: string = slug instanceof Array ? slug[0] : slug;
  const res = await fetch(`http://localhost:5000/post/${file}`.toLowerCase());

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
