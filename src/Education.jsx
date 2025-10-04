import './Education.css'

import logo from './assets/scope-india-logo.png'
import ashok from './assets/ashok-leyland-logo.png'
import polytechnic from './assets/sree_krishna_polytechnic_college_logo.png'
import evans from './assets/evans-school-logo.png'


function Education() {
    return (
        <>
            <section id='education-section'>
                <h1>Educations & My Learning Journey</h1>
                <p>My education has been a journey of self-discovery and growth. <br />
                    My educational details are as follows.</p>

                <div>
                    <h2>Scope India</h2>
                    <img src={logo} alt="scope-india-logo"/>
                    <p>Python-Full-Stack</p>
                    <p><em>2024 - 2025</em></p>
                    <ul type="square">
                        <li>Completed a comprehensive Python Full-Stack Development course.</li>
                        <li>Gained expertise in HTML, CSS, JavaScript, React.js, Python, Django, and SQL.</li>
                        <li>Skilled in crafting visually captivating, responsive websites and dynamic web applications.</li>
                        <li>Built hands-on projects using React.js and Django.</li>
                        <li>Strengthened knowledge of modern full-stack development practices.</li>
                        <li>Passionate about designing user-centric, scalable, and engaging digital solutions.</li>
                    </ul>
                </div>

                <div>
                    <h2>Ashok-Leyland</h2>
                    <img src={ashok} alt="ashok-leyland-logo"/>
                    <p>Apprentice-Ship[NAPS-Trainee]</p>
                    <p><em>2022 - 2024</em></p>
                    <ul type="square">
                        <li>Worked as a Mechanical Maintenance Trainee under the NAPS (National Apprenticeship Promotion Scheme).</li>
                        <li>Gained hands-on experience in maintenance, troubleshooting, and repair of mechanical systems.</li>
                        <li>Learned preventive and corrective maintenance practices to ensure smooth plant operations.</li>
                        <li>Developed problem-solving skills and practical knowledge of industrial machinery.</li>
                        <li>Collaborated with experienced technicians and engineers to enhance technical skills.</li>
                        <li>Understood safety protocols and best practices in an industrial environment.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/11OMAqmWIqqdpyzOL9Upn8lhFrhkmXle-/view?usp=drive_link" target='_blank'>Certificate</a>
                </div>

                <div>
                    <h2>Sree Krishna Pollytechnic College Nagarcoil.</h2>
                    <img src={polytechnic} alt="sree_krishna_polytechnic_college_logo"/>
                    <p>Diploma in Mechanical Engineering.</p>
                    <p><em>2020 - 2022</em></p>
                    <p>Grade: <strong>89%</strong> </p>
                    <ul type="square">
                        <li>Earned a Diploma in Mechanical Engineering, building a solid foundation in core engineering principles and practices.</li>
                        <li>Developed strong analytical and problem-solving skills with a systematic approach to challenges.</li>
                        <li>Gained hands-on practical experience, enhancing technical proficiency.</li>
                        <li>Strengthened ability to work collaboratively in teams, improving communication and interpersonal skills.</li>
                        <li>Built a strong work ethic and commitment to excellence, carrying these values into my career as a developer.</li>
                    </ul>
                </div>

                <div>
                    <h2>Samuel LMS Higher Secondary School Cheruvarakonam.</h2>
                    {/* <img src="src/assets/scope-india-logo.png" alt=""/> */}
                    <p>HSC-XII (Std:+2) (Biology-Science).</p>
                    <p><em>2018 - 2020</em></p>
                    <p>Grade: <strong>60%</strong> </p>
                    <ul type="square">
                        <li>Completed Higher Secondary education with a focus on Biology Science.</li>
                        <li>Developed critical thinking and adaptability through a dynamic academic journey.</li>
                        <li>Gained a strong foundation in science and analytical skills.</li>
                        <li>Built a thirst for knowledge and the ability to apply learnings across disciplines.</li>
                        <li>Prepared for future challenges through dedication, perseverance, and adaptability.</li>
                    </ul>
                </div>

                <div>
                    <h2>Evans High School Parassala.</h2>
                    <img src={evans} alt="evans-school-logo"/>
                    <p>SSLC - X (Std:10th).</p>
                    <p><em>2017 - 2018</em></p>
                    <p>Grade: <strong>86%</strong> </p>
                    <ul type="square">
                        <li>Completed SSLC, marking the beginning of my formal educational journey.</li>
                        <li>Built a strong foundation in core subjects.</li>
                        <li>Developed time management and organizational skills.</li>
                        <li>Laid the groundwork for academic and personal growth.</li>
                        <li>Prepared for future educational challenges and opportunities.</li>
                    </ul>
                </div>

            </section>

        </>
    );
};

export default Education;