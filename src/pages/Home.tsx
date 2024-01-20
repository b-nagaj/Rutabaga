// Home page

import Section from "../components/Section/Section.tsx"
import { Intro, IntroProps } from "../components/Intro/Intro.tsx"
import { Card, CardProps } from "../components/Card/Card.tsx"

const introContent: IntroProps = {
  title: "Rutabaga Reading",
  subtitle: "Keep all the metrics about your favorite books, all in one place. Rutabaga running is a platform where you can keep tallies on the books you've read and what you love about them."
}

const contentRowValues: CardProps = {
  titles: ['Test 1', 'Test 2', 'Test 3'],
  images: ['https://i.imgur.com/MK3eW3Am.jpg', 'https://i.imgur.com/7vQD0fPs.jpg', 'https://i.imgur.com/1bX5QH6.jpg'],
  imageAlts: ['Picture #1', 'Picture #2', 'Picture #3'],
  descriptions: ['Description 1', 'Description 2', 'Description 3'],
};

const Home = () => {
  return (
    <>
      <Section>
        <Intro
          title={introContent.title}
          subtitle={introContent.subtitle}>
        </Intro>
      </Section>
      <Section className="content-row-background">
        <Card 
          titles={contentRowValues.titles}
          images={contentRowValues.images}
          imageAlts={contentRowValues.imageAlts}
          descriptions={contentRowValues.descriptions}>
        </Card>
      </Section>
    </>
  )
}

export default Home;
