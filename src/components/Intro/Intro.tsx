// Intro component to explain what the site does at a glance

import Section from "../Section/Section.tsx";

import "./Intro.css";

export type IntroProps = {
  title: string;
  subtitle: string;
};

export const Intro: React.FC<IntroProps> = ({ title, subtitle }) => {
  return (
    <Section className="intro">
      <h1 className="intro intro__title">{title}</h1>
      <div className="intro intro__subtitle">{subtitle}</div>
    </Section>
  );
};

export default Intro;
