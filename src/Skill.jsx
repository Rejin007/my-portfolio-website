import './App.css'
import './Skills.css'
function Skill() {
    return (
        <>
            <section id='skill-section'>
                <h1>Skills</h1>
                <p>Here are some of my skills on which i have learnt.</p>

                <article>
                    <div>
                        <h2>Frontend</h2>
                        <div className='skills'>
                            <p><img src="src/assets/html.png" alt="html" /> HTML</p>
                            <p><img src="src/assets/css.png" alt="css" /> CSS</p>
                            <p><img src="src/assets/js_5968292.png" alt="js" /> JavaScript</p>
                            <p><img src="src/assets/react-js.png" alt="react" /> React-JS</p>
                            <p><img src="src/assets/bootstrap.png" alt="bootstrap" /> Bootstrap</p>
                            <p><img src="src/assets/jquery.png" alt="jquery" /> J-query</p>
                            <p> Ajax</p>
                            <p> Fetch API</p>
                        </div>
                    </div>

                    <div>
                        <h2>Backend</h2>
                        <div className='skills'>
                            <p><img src="src/assets/python.png" alt="python" /> Python</p>
                            <p><img src="src/assets/django.png" alt="django" /> Django</p>
                            <p><img src="src/assets/sql.png" alt="sql" /> Sql</p>
                        </div>
                    </div>

                    <div>
                        <h2>Others</h2>
                        <div className='skills'>
                            <p><img src="src/assets/git.png" alt="git" /> Git</p>
                            <p><img src="src/assets/github.png" alt="github" /> GitHub</p>
                            <p><img src="src/assets/vscode.png" alt="vscode" /> VS Code</p>
                        </div>
                    </div>

                </article>
            </section>
        </>
    );
};

export default Skill;