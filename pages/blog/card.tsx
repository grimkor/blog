import React, { FC } from "react";

const Card: FC = () => (
  <article className="card">
    <a href="#" className="card__image">
      <img />
    </a>
    <div className="card__text">
      <a>
        <header>Title of Article</header>
        <section>
          This is the summary of the article written in a section. This is the
          summary of the article written in a section. This is the summary of
          the article written in a section. This is the summary of the article
          written in a section. This is the summary of the article written in a
          section. This is the summary of the article written in a section.
        </section>
      </a>
      <footer>Footer</footer>
    </div>
  </article>
);

export default Card;
