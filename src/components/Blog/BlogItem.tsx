import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";

type IRecentPostsProps = {
  blog: MarkdownInstance<IFrontmatter>;
};

const BlogItem = (props: IRecentPostsProps) => {
  const { blog } = props;
  const { frontmatter } = blog;
  return (
    <div className="blog-item">
      <a href={blog.url}>
        <img
          src={frontmatter.imgSrc}
          alt={frontmatter.imgAlt}
          className="rounded-md"
        />
      </a>
      <a href={blog.url}>
        <h3 className="text-lg font-bold blog-item-title">
          {frontmatter.title}
        </h3>
      </a>
      <p className="text-sm">{frontmatter.description}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <img
            src={frontmatter.imgSrc}
            alt={frontmatter.imgAlt}
            className="rounded-full w-4 h-4 mr-2"
          />
          <a href="/about">
            {frontmatter.author ? frontmatter.author : "haodev"}
          </a>
        </div>
        <div>
          <span>{frontmatter.pubDate.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  );
};

export { BlogItem };
