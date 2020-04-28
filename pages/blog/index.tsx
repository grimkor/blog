import React from "react";
import Card from "../../components/blog/card/card";
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
        extension={`${post.data.filename}`}
      />
    ))}
  </div>
);

BlogList.getInitialProps = async (context) => {
  const res = await fetch(`${process.env.REACT_APP_API}/posts`);
  if (res.ok) {
    const data = await res.json();
    return { data };
  } else {
    return { data: [] };
  }
};

export default BlogList;
