import { GradientText, Section } from "astro-boilerplate-components";

type IRecentTagsProps = {
  tagList: string[];
};

const ListCategories = (props: IRecentTagsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          <GradientText>Danh mục</GradientText> nổi bật
        </div>

        <div className="text-sm">
          <a href="/tags">Xem tất cả →</a>
        </div>
      </div>
    }
  >
    <div></div>
  </Section>
);

export { ListCategories };
