import { useState } from "react"
import { Link, useMatch } from "react-router"
import "../stylesheets/header.css"
import useTheme from "../hooks/useTheme"
import LightbulbOn from "../assets/lightbulb-on.svg?react"
import LightbulbOff from "../assets/lightbulb-off.svg?react"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const openMenu = e => {
    setMenuOpened(!menuOpened)
  }
  return (
    <header>
      <HamburgerMenu openMenu={openMenu} menuOpened={menuOpened} />
      <nav className={"page-nav" + (menuOpened ? "" : " page-nav-hidden")}>
        <NavOption text="About" path="" />
        <NavOption text="Projects" path="projects" />
        <NavOption text="Contact" path="contact" />
        <Lightbulb />
      </nav>
    </header>
  )
}
const Lightbulb = () => {
  const [theme, toggleTheme] = useTheme()
  return (
    <button onClick={toggleTheme}>
      {theme == "light" ? (
        <LightbulbOn className="icon" />
      ) : (
        <LightbulbOff className="icon" />
      )}
    </button>
  )
}
const HamburgerMenu = ({ openMenu, menuOpened }) => {
  return (
    <button
      onClick={openMenu}
      className={"menu-button" + (menuOpened ? " menu-open" : "")}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
const NavOption = ({ path, text }) => {
  const nav = useMatch(path)
  const addHighlight = target => {
    if (`/${target}` === nav?.pathname) {
      return " highlight"
    }
    return ""
  }
  return (
    <Link to={path}>
      <span className={addHighlight(path)}>{text}</span>
    </Link>
  )
}

export default Header
