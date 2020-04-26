import React, { FC } from "react";
import { PostInterface } from "../../../types";

interface CardProps {
  post: PostInterface;
  extension: string;
}

const Index: FC<CardProps> = ({ post, extension }) => (
  <article className="card">
    <a href={`/blog/${extension}`} className="card__image">
      <img />
    </a>
    <div className="card__text">
      <a href={`/blog/${extension}`}>
        <header>{post.data.title}</header>
        <section>{post.excerpt}</section>
      </a>
      <footer>Footer</footer>
    </div>
  </article>
);

export default Index;
