// Home page

import Section from "../components/Section/Section.tsx";
import { Intro, IntroProps } from "../components/Intro/Intro.tsx";

import {
  ContentRow,
  ContentRowProps,
} from "../components/ContentRow/ContentRow.tsx";

const introContent: IntroProps = {
  title: "Rutabaga Reading",
  subtitle:
    "Keep all the metrics about your favorite books, all in one place. Rutabaga running is a platform where you can keep tallies on the books you've read and what you love about them.",
};

const contentRowValues: ContentRowProps = {
  titles: ["Log A Book", "Add to Your Wishlist", "View & Manage Goals"],
  images: [
    "../public/images/cards/logABook.jpeg", // https://www.freepik.com/free-vector/novelist-writing-concept-illustration_9148013.htm#page=3&query=cartoon%20author&position=15&from_view=search&track=ais&uuid=4d42551b-94ce-4d37-b4c0-c9d1786f88f1
    "../public/images/cards/createAWishlist.jpg", // https://www.freepik.com/free-vector/hand-drawn-black-teacher-clipart-illustration_84406351.htm#query=cartoon%20author%20borderless&position=19&from_view=search&track=ais&uuid=1a19fdd9-66f6-4f38-81eb-216649b77f58
    "../public/images/cards/viewAndManageGoals.jpg", // https://www.freepik.com/free-vector/business-people-success-concept_5727734.htm#page=2&query=cartoon%20goal%20achiever%20female&position=4&from_view=search&track=ais&uuid=eb735761-783f-4d35-b0c0-005516ebc24a
  ],
  imageAlts: [
    "A cartoon reader writing a review",
    "A cartoon man holding a wishlist",
    "A cartoon hiker accomplishing his goals",
  ],
  descriptions: [
    "Put on the glasses of a literary illusionist. Leave your review on a book you've recently added to your repertoire",
    "Craft a personalized treasure map to your desires. Make a list of books you can't live without",
    "Plant a seed in the garden of your aspirations. Set a goal to define your reading journey",
  ],
};

const Home = () => {
  return (
    <>
      <Section>
        <Intro
          title={introContent.title}
          subtitle={introContent.subtitle}></Intro>
      </Section>
      <Section>
        <ContentRow
          titles={contentRowValues.titles}
          images={contentRowValues.images}
          imageAlts={contentRowValues.imageAlts}
          descriptions={contentRowValues.descriptions}></ContentRow>
      </Section>
    </>
  );
};

export default Home;
