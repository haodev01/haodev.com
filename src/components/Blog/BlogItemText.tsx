import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";

type IRecentPostsProps = {
  blog: MarkdownInstance<IFrontmatter>;
};

const BlogItemText = (props: IRecentPostsProps) => {
  const { blog } = props;
  const { frontmatter } = blog;
  return (
    <div className="blog-item">
      <a href={blog.url}>
        <h3 className="text-sm blog-item-title py-2 border-b border-[rgba(255,255,255,.08)]">
          {frontmatter.title}
        </h3>
      </a>
    </div>
  );
};

export { BlogItemText };
