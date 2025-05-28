import "../stylesheets/about.css"
const About = () => {
  return (
    <div id="about">
      <section id="intro-section">
        <div>
          <h1>Hi, I'm Luke</h1>
          <p>I'm a web developer from California, USA.</p>
        </div>
      </section>
      <section id="about-section">
        <div>
          <h2>Background</h2>
          <p>
            I was first really introduced to programming in my freshman year of
            highschool through a class I took. I was terrible at it but I got
            hooked and have been ever since. I've always liked knowing how
            things work so I always ended up teaching myself new things from the
            bottom up as I am terrible at using tools that I don't understand
            the inner workings of. I've really enjoyed expirimenting and
            creating projects to cement my knowledge.
          </p>
        </div>
      </section>
      <section id="skills-section">
        <div>
          <h2>Skills</h2>
          <p>Tech I enjoy using:</p>
          <ul>
            <li>Javascript/Node.js</li>
            <li>React</li>
            <li>C</li>
            <li>Golang</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About
