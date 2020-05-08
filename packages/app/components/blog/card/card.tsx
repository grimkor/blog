import React, { FC } from "react";
import { PostInterface } from "../../../types";

interface CardProps {
  post: PostInterface;
}

const Card: FC<CardProps> = ({ post }) => (
  <article className="card">
    <a
      href={`/blog/${post.data.filename}`}
      className="card__image"
      style={{
        backgroundImage: post.data.image ? `url(${post.data.image}) ` : "unset",
      }}
    />
    <div className="card__text">
      <a href={`/blog/${post.data.filename}`}>
        <header>{post.data.title}</header>
        <section>{post.data.description}</section>
      </a>
      <footer className="card__footer">
        <p>{post.data.date}</p>
        <p className="card__text--readtime">{post.data.readingTime} Min Read</p>
      </footer>
    </div>
  </article>
);

export default Card;
