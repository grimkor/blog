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
import { Article, H1, H4 } from "./styled";
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
    <Article>
      <H1 className="--centered">{data.data.title}</H1>
      <H4 className="--centered --subheader">{data.data.date}</H4>
      {
        // @ts-expect-error
        processor.processSync(data.content).result
      }
    </Article>
  );
};

export default Post;
