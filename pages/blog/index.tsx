import React from "react";
import Card from "../../components/blog/card";
import { NextPage } from "next";
import { PostInterface } from "../../types";
import fetch from "isomorphic-unfetch";

interface BlogListProps {
  data: PostInterface[];
}

const BlogList: NextPage<BlogListProps> = (props) => (
  <div className="list">
    {props.data.map((post) => (
      <Card
        key={post.data.title}
        post={post}
        extension={post.data.title.replace(" ", "-")}
      />
    ))}
  </div>
);

BlogList.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:5000/posts");
  if (res.ok) {
    const data = await res.json();
    return { data };
  } else {
    return { data: [] };
  }
};

export default BlogList;
