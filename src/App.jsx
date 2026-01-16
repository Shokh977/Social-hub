import { motion } from "framer-motion"
import Profile from "./components/Profile"
import IconRow from "./components/IconRow"
import ExploreButton from "./components/ExploreButton"
import SocialCards from "./components/SocialCards"
import { links } from "./data/links"

export default function App() {
  const scrollToCards = () => {
    document.getElementById('social-cards').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="id-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Profile />
        <IconRow links={links} />
        <ExploreButton onClick={scrollToCards} />
      </motion.div>

      <div id="social-cards">
        <SocialCards links={links} />
      </div>
    </motion.div>
  )
}