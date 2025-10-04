import { useState, useEffect } from "react";
import "./About.css";
import './App.css'

function About() {
    const roles = ["Web Developer.", "Full-stack Developer.", "Python Developer."];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 100; // typing / deleting speed
        let timeout;

        if (!isDeleting && charIndex <= roles[wordIndex].length) {
            setText(roles[wordIndex].substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            setText(roles[wordIndex].substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex((prev) => prev - 1), typingSpeed);
        } else if (!isDeleting && charIndex > roles[wordIndex].length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
        } else if (isDeleting && charIndex < 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % roles.length); // move to next word
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, roles]);

    return (
        <section id="about-section">
            <div>
                <h1>Hi, I am</h1>
                <h1>REJIN.R.J</h1>
                <h2>
                    I am a{" "}
                    <strong id="iam" >
                        {text}
                    </strong>
                </h2>

                <p>

                    A skilled Python-Full-Stack developer with a strong portfolio,
                    passionate about staying updated an Frontend and Backend (Full-Stack)
                    tech.Collabrative and committed to quality you thrive in dynamic teams.
                    Eager to contribute . Creativity and bring innovative ideas to life.

                </p><br /><br />
                <a href="https://drive.google.com/file/d/1ymvI-fdDfEl2P1vgOg0BStYJ-xXnQVWi/view?usp=drive_link" target="_blank">Check Resume</a>
            </div>
            <img src="src/assets/my-image.png" alt="profile-picture" />
        </section>
    );
}

export default About;
