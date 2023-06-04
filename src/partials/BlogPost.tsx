import type { IFrontmatter } from "astro-boilerplate-components";
import { PostContent, Section } from "astro-boilerplate-components";
import type { ReactNode } from "react";
import "@/styles/global.css";
type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => {
  const { frontmatter, children } = props;
  return (
    <Section>
      <div className="text-center">
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      </div>

      <div className="blog-content">
        <PostContent content={frontmatter}>{children}</PostContent>
      </div>
    </Section>
  );
};

export { BlogPost };
