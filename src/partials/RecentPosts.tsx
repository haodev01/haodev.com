import { BlogList } from "@/components/Blog/BlogList";
import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import { GradientText, Section } from "astro-boilerplate-components";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          <GradientText>Bài viết</GradientText> gần đây
        </div>

        <div className="text-sm">
          <a href="/posts">Xem tất cả →</a>
        </div>
      </div>
    }
  >
    <BlogList postList={props.postList} />
  </Section>
);

export { RecentPosts };
