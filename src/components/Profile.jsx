import { motion } from "framer-motion"
import profileImg from '../assets/photo_2026-01-16_14-16-18.jpg'

export default function Profile() {
  const idNumber = "ID: 2024-001" // Fixed ID

  return (
    <motion.div
      className="profile"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="badge-label">CREATOR PASS</div>
      <img
        src={profileImg}
        alt="Profile"
        className="avatar"
      />
      <h1>Shokhrukh</h1>
      <p>Korea | Media | Digital</p>
      <div className="divider" />
      <div className="id-info">
        <span className="id-number">{idNumber}</span>
        <div className="status">
          <div className="status-dot"></div>
          <span>ONLINE</span>
        </div>
      </div>
    </motion.div>
  )
}