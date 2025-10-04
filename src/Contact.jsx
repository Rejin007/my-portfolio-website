import { useState } from "react";
import './Contact.css';

function Contact() {
  // useState hooks for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const mailtoLink = `mailto:rejinrjr144@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact-section">
      <h1>Contact Me</h1>
      <p>
        If you have any questions, projects, or opportunities you'd like to
        discuss, feel free to reach out! <br />
        I'm always open to connecting with fellow developers, potential
        collaborators, and anyone interested in my work.
      </p>

      <article id="contact-article">
        <div>
          <h2>Get in Touch</h2>
          <div>
            <p>
              <strong>Email : </strong>
              <br />
              <br />
              <a href="mailto:rejinrjr144@gmail.com">Click Me!</a>
            </p>
            <p>
              <strong>Contact : </strong>
              <br />
              <br />
              <a href="tel:+918590471041">Click Me!</a>
            </p>
            <p>
              <strong>LinkedIn :</strong>
              <br />
              <br />
              <a href="https://www.linkedin.com/in/rejin-r-j-a88066377/" target="_blank" rel="noreferrer">
                Click Me!
              </a>
            </p>
            <p>
              <strong>GitHub : </strong>
              <br />
              <br />
              <a href="https://github.com/Rejin007" target="_blank" rel="noreferrer">
                Click Me!
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2>Contact Me Via Mail.</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <br />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default Contact;
