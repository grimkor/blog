import React, { FC } from "react";
import { PostInterface } from "../../../types";
import unified from "unified";
import markdown from "remark-parse";
import remark2react from "remark-react";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import rehype2react from "rehype-react";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
interface PostProps {
  data: PostInterface;
}

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(highlight, {
    languages: {
      typescript,
      javascript,
    },
    aliases: {
      javascript: ["tsx"],
    },
  })
  .use(rehype2react, { createElement: React.createElement });

const Post: FC<PostProps> = ({ data }) => {
  return (
    <article className="post">
      <h1 className="--centered">{data.data.title}</h1>
      <h4 className="--centered --subheader">{data.data.date}</h4>
      {processor.processSync(data.content).result}
    </article>
  );
};

export default Post;
