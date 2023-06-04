import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import { BlogItemText } from "./BlogItemText";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const BlogListText = (props: IRecentPostsProps) => {
  const { postList } = props;
  return (
    <div>
      {postList &&
        postList.map((blog, index) => <BlogItemText blog={blog} key={index} />)}
    </div>
  );
};

export { BlogListText };
