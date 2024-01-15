// Home page

import Intro from "../components/Title/Intro"

const title = "Rutabaga Reading"
const subtitle = "Keep all the metrics about your favorite books, all in one place. Rutabaga running is a platform where you can keep tallies on the books you've read and what you love about them."

function Home() {
  return (
    <Intro
      title={title}
      subtitle={subtitle}>
    </Intro>
  )
}

export default Home;
