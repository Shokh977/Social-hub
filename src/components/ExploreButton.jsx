import { motion } from "framer-motion"

export default function ExploreButton({ onClick }) {
  return (
    <motion.button
      className="explore-btn"
      onClick={onClick}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Tap to Explore
    </motion.button>
  )
}