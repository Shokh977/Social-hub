import { motion } from "framer-motion"
import * as Icons from "react-icons/fa"

export default function SocialCard({ title, desc, icon, link }) {
  const Icon = Icons[icon]

  return (
    <motion.a
      href={link}
      target="_blank"
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="icon" />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.a>
  )
}