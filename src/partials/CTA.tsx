import { BlogListText } from "@/components/Blog/BlogListText";
import { connectAuthor, linkList } from "@/constants";
import type { MarkdownInstance } from "astro";
import { GradientText, IFrontmatter } from "astro-boilerplate-components";
import { Section } from "astro-boilerplate-components";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};
const CTA = (props: IRecentPostsProps) => {
  const { postList } = props;
  return (
    <div className="bg-[#090E19] mt-10">
      <div className="grid grid-cols-3 gap-x-6">
        <Section>
          <div className="font-bold mb-4 text-sm uppercase">
            <GradientText>Bài viết mới nhất</GradientText>
          </div>
          <BlogListText postList={postList} />
        </Section>
        <Section>
          <div className="font-bold mb-4 text-sm uppercase">
            <GradientText>Link hữu ích</GradientText>
          </div>
          <ul>
            {linkList.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className=" block text-sm blog-item-title py-2 border-b border-[rgba(255,255,255,.08)]"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Section>
        <Section>
          <div className="font-bold mb-4 text-sm uppercase">
            <GradientText>Kết nối</GradientText>
          </div>
          <ul>
            {connectAuthor.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className=" block text-sm blog-item-title py-2 border-b border-[rgba(255,255,255,.08)]"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export { CTA };
