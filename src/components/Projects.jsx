import "../stylesheets/projects.css"
const projects = [
  {
    name: "Maze Generation",
    description:
      "An exploration into all the different algorithms that are used for generating mazes",
    url: "https://lukeeades.github.io/maze_generation",
  },
  {
    name: "Pomodoro Timer",
    description: "A very simple and minimal pomodoro timer",
    url: "https://lukeeades.github.io/pomodoro_timer",
  },
  {
    name: "Personal Website",
    description: "Built with React, and love, I suppose",
    url: "https://luke-eades.org",
  },
]
const Projects = () => {
  return (
    <div id="projects">
      {projects.map((project, index) => {
        return (
          <section className="project" key={index}>
            <div>
              <h2>
                <a href={project.url} className="highlight">
                  {project.name}
                </a>
              </h2>
              <p>{project.description}</p>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Projects
