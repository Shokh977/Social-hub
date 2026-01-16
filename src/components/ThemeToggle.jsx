import { FaSun, FaMoon } from "react-icons/fa"

export default function ThemeToggle() {
  function toggle() {
    document.body.classList.toggle("light")
  }

  const isLight = document.body.classList.contains("light")

  return (
    <button className="theme-toggle" onClick={toggle}>
      {isLight ? <FaMoon /> : <FaSun />}
    </button>
  )
}