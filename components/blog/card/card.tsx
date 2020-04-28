import React, { FC } from "react";
import { PostInterface } from "../../../types";

interface CardProps {
  post: PostInterface;
  extension: string;
}

const Card: FC<CardProps> = ({ post, extension }) => (
  <article className="card">
    <a
      href={`/blog/${extension}`}
      className="card__image"
      style={{
        backgroundImage: post.data.image
          ? `url(${process.env.REACT_APP_API}/image/${post.data.image}) `
          : "unset",
      }}
    />
    <div className="card__text">
      <a href={`/blog/${extension}`}>
        <header>{post.data.title}</header>
        <section>{post.excerpt}</section>
      </a>
      <footer>
        <p>{post.data.date}</p>
        <p className="card__text--readtime">{post.data.readingTime} Min Read</p>
      </footer>
    </div>
  </article>
);

export default Card;
