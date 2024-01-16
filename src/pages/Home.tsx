// Home page

import Section from "../components/Section/Section.tsx"
import Intro from "../components/Intro/Intro.tsx"

const title = "Rutabaga Reading"
const subtitle = "Keep all the metrics about your favorite books, all in one place. Rutabaga running is a platform where you can keep tallies on the books you've read and what you love about them."

function Home() {
  return (
    <Section>
      <Intro
        title={title}
        subtitle={subtitle}>
      </Intro>
    </Section>
  )
}

export default Home;
