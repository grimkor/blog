import React, { FC } from "react";
import Card from "../../components/blog/card";
import { NextPage } from "next";
import { PostInterface } from "../../types";
import matter from "gray-matter";

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

BlogList.getInitialProps = (context) => {
  const text = `---
title: "Hello World"
date: "2020-01-07"
---
This is the start of the article content that is now part of the summary.
I'm sure there will be more text in the future.
### Step 1
\`\`\`
const test = 'lol';
\`\`\`

- Install dependencies
- Run locally
- Deploy to Zeit
`;

  const getExcerpt = (file: any) => {
    return (file.excerpt = file.content
      .replace("\n", " ")
      .split(/#(.+)/)[0] // remove anything before the first "#"
      .split(" ")
      .slice(0, 25)
      .join(" "));
  };

  // @ts-ignore
  const data: PostInterface[] = Array(10).fill(
    matter(text, { excerpt: getExcerpt })
  );
  return { data };
};

export default BlogList;
