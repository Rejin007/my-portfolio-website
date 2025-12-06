import './Project.css'

import scope from './assets/scope.png'
import shoppingsite from './assets/shoppingsite.png'
import portfolio from './assets/portfolio.png'



function Projects() {
    return (
        <>
            <section id='project-section'>
                <h1>Projects</h1>
                <p>i have worked on a wide range of projects.From web apps to <br />
                    android apps.Here are some of my projects.</p>
                <article id='project-article'>


                    <div>
                        <img src={scope} alt="scope-project-landing-page-template" />
                        <p><strong>Tech Stack : </strong>HTML , CSS , Java-Script,Bootstrap, Python, Django, MySQL.</p>
                        <h2>Scope India Educational Website.</h2>
                        <p><strong>Year : </strong>2025</p>
                        <ul type="square">
                            <li>Modern, user-friendly interface for easy navigation.</li>
                            <li>Course catalog with categories and detailed descriptions.</li>
                            <li>Secure user authentication (students & admins).</li>
                            <li>Dynamic content management for adding/updating courses.</li>
                            <li>Robust database integration ensuring reliable performance.</li>
                        </ul>
                        <a href="https://github.com/Rejin007/project_scope_india" target='_blank'>&#128279; Get Code</a>
                        <a href="https://github.com/Rejin007/project_scope_india" target='_blank'>&#127760; Visite Project</a>
                    </div>

                    <div>
                        <img src={shoppingsite} alt="shoppingsite-project-landing-page-template" />
                        <p><strong>Tech Stack : </strong>HTML , CSS , Java-Script ,Python, Django, MySQL.</p>
                        <h2>E Commercial Shopping Website.</h2>
                        <p><strong>Year : </strong>2025</p>
                        <ul type="square">

                            <li>Intuitive UI/UX for hassle-free product browsing.</li>
                            <li>Secure user authentication and account management.</li>
                            <li>Product catalog with categories and search functionality.</li>
                            <li>Shopping cart and order management system.</li>
                            <li>Database-driven architecture ensuring scalability and robustness.</li>
                        </ul>
                        <a href="https://github.com/Rejin007/shopping_site" target='_blank'>&#128279; Get Code</a>
                        <a href="https://github.com/Rejin007/shopping_site" target='_blank'>&#127760; Visite Project</a>
                    </div>

                    <div>
                        <img src={portfolio} alt="my-portfolio-landing-page-template" />
                        <p><strong>Tech Stack : </strong> HTML, CSS, Java-Script, React.js</p>
                        <h2>My Portfolio Website.</h2>
                        <p><strong>Year : </strong>2025</p>
                        <ul type="square">
                            <li>Responsive design for all devices..</li>
                            <li>Interactive sections showcasing skills, projects, and experience.</li>
                            <li>Smooth navigation and transitions.</li>
                            <li>Optimized for performance and user experience.</li>
                            <li>Contact form for easy communication.</li>
                        </ul>
                        <a href="https://github.com/Rejin007/my-portfolio-website" target='_blank'>&#128279; Get Code</a>
                        <a href="https://rejin007.github.io/my-portfolio-website/" target='_blank'>&#127760; Visite Project</a>
                    </div>


                    <div>
                        {/* <img src={scope} alt="scope-project-landing-page-template" /> */}
                        <h2>Career Guidance System.</h2>
                        <p><strong>Year : </strong>2025</p>
                        <p><strong>Tech Stack : </strong>HTML , CSS , Java-Script,Bootstrap, Python, Django, MySQL.</p>
                        <ul type="square">
                            <li>Personalized career recommendations based on user skills, interests, and academic background.</li>
                            <li>User-friendly dashboard for students to explore multiple career paths.</li>
                            <li>Admin panel for managing career data, categories, and recommendation rules.</li>
                            <li>Automated suggestion engine using predefined logic to match
                                users with suitable careers. </li>
                            <li>Secure authentication system for both students and administrators.</li>
                            <li>Scalable database design to store user profiles, career information, and guidance resources.</li>
                        </ul>
                        {/* <a href="https://github.com/Rejin007/project_scope_india" target='_blank'>&#128279; Get Code</a>
                        <a href="https://github.com/Rejin007/project_scope_india" target='_blank'>&#127760; Visite Project</a> */}
                    </div>

                </article>
            </section>
        </>
    );
};

export default Projects;