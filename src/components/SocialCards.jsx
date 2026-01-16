import { motion } from "framer-motion"
import SocialCard from "./SocialCard"

export default function SocialCards({ links }) {
  const instagramLinks = links.filter(link => link.icon === "FaInstagram")
  const otherLinks = links.filter(link => link.icon !== "FaInstagram")

  return (
    <motion.div
      className="social-cards"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {instagramLinks.length > 0 && (
        <div className="instagram-section">
          <h2>Instagram Accounts</h2>
          {instagramLinks.map((item, i) => (
            <SocialCard key={i} {...item} />
          ))}
        </div>
      )}

      {otherLinks.length > 0 && (
        <div className="other-section">
          <h2>Other Platforms</h2>
          {otherLinks.map((item, i) => (
            <SocialCard key={i} {...item} />
          ))}
        </div>
      )}
    </motion.div>
  )
}