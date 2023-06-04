import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import { BlogItem } from "./BlogItem";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const BlogList = (props: IRecentPostsProps) => {
  const { postList } = props;
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-8">
      {postList.map((blog, index) => (
        <BlogItem blog={blog} key={index} />
      ))}
    </div>
  );
};

export { BlogList };
