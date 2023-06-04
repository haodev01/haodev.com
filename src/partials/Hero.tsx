import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Chào bạn, Tôi là <GradientText>Hào</GradientText> 👋
        </>
      }
      description={
        <>
          Hiện tại tôi là một Junior Frontend Developer với{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            2 năm
          </a>{" "}
          kinh nghiệm làm việc. Và tôi quen thuộc với các công nghệ như{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            VueJS và ReactJS
          </a>{" "}
          .
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/chihao.nguyen310/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hao-nguyen-bb6a16272/"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
