import { motion } from "framer-motion"
import * as Icons from "react-icons/fa"

export default function IconRow({ links }) {
  return (
    <motion.div
      className="icon-row"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {links.map((link, i) => {
        const Icon = Icons[link.icon]
        return (
          <motion.a
            key={i}
            href={link.link}
            target="_blank"
            className="icon-link"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="platform-icon" />
          </motion.a>
        )
      })}
    </motion.div>
  )
}