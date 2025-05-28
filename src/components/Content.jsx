import { Routes, Route } from "react-router"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import "../stylesheets/content.css"
const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default Content
