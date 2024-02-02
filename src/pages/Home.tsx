// Home page

import Section from "../components/Section/Section.tsx"
import { Intro, IntroProps } from "../components/Intro/Intro.tsx"
import { ContentRow, ContentRowProps } from "../components/ContentRow/ContentRow.tsx";

const introContent: IntroProps = {
  title: "Rutabaga Reading",
  subtitle: "Keep all the metrics about your favorite books, all in one place. Rutabaga running is a platform where you can keep tallies on the books you've read and what you love about them."
}

const contentRowValues: ContentRowProps = {
  titles: ["Log A Book", 
           "Add to Your Wishlist", 
           "View & Manage Goals"
          ],
  images: ["https://i.imgur.com/MK3eW3Am.jpg", 
           "https://i.imgur.com/7vQD0fPs.jpg", 
           "https://i.imgur.com/1bX5QH6.jpg"
          ],
  imageAlts: ["Log A Book", 
              "Add to Your Wishlist", 
              "View & Manage Goals"
             ],
  descriptions: ["Put on the glasses of a literary illusionist. Leave your review on a book you've recently added to your repertoire", 
                 "Craft a personalized treasure map to your desires. Make a list of books you can't live without", 
                 "Plant a seed in the garden of your aspirations. Set a goal to define your reading journey"
                ],
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
        <ContentRow
          titles={contentRowValues.titles}
          images={contentRowValues.images}
          imageAlts={contentRowValues.imageAlts}
          descriptions={contentRowValues.descriptions}>
        </ContentRow>
      </Section>
    </>
  )
}

export default Home;
