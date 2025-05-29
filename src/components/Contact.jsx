import "../stylesheets/contact.css"
const Contact = () => {
  return (
    <div id="contact">
      <section id="contact-section">
        <div>
          <h1>Contact</h1>
          <p>
            You can contact me at{" "}
            <a href="mailto:lukegeades@gmail.com" className="highlight">
              lukegeades@gmail.com
            </a>{" "}
            if for some reason you need to.
            <br />
            You can also check out my{" "}
            <a href="https://github.com/lukeeades" className="highlight">
              github
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
