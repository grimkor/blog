import React, { FC } from "react";
import { PostInterface } from "../../../types";
import ReactMarkdown from "react-markdown";

interface PostProps {
  data: PostInterface;
}

const Post: FC<PostProps> = ({ data }) => {
  return (
    <article className="post --centered">
      <h1 className="--centered">{data.data.title}</h1>
      <h4 className="--centered --subheader">{data.data.date}</h4>
      {data.data.image ? <img src={data.data.image} /> : null}
      <ReactMarkdown source={data.content} />
    </article>
  );
};

export default Post;
