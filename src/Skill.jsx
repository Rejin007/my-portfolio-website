import './App.css'
import './Skills.css'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js_5968292.png'
import react from './assets/react-js.png'
import bootstrap from './assets/bootstrap.png'
import jquery from './assets/jquery.png'
import python from './assets/python.png'
import django from './assets/django.png'
import sql from './assets/sql.png'
import git from './assets/git.png'
import github from './assets/github.png'
import vscode from './assets/vscode.png'




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
                            <p><img src={html} alt="html" /> HTML</p>
                            <p><img src={css} alt="css" /> CSS</p>
                            <p><img src={js} alt="js" /> JavaScript</p>
                            <p><img src={react} alt="react" /> React-JS</p>
                            <p><img src={bootstrap} alt="bootstrap" /> Bootstrap</p>
                            <p><img src={jquery} alt="jquery" /> J-query</p>
                            <p> Ajax</p>
                            <p> Fetch API</p>
                        </div>
                    </div>

                    <div>
                        <h2>Backend</h2>
                        <div className='skills'>
                            <p><img src={python} alt="python" /> Python</p>
                            <p><img src={django} alt="django" /> Django</p>
                            <p><img src={sql} alt="sql" /> Sql</p>
                        </div>
                    </div>

                    <div>
                        <h2>Others</h2>
                        <div className='skills'>
                            <p><img src={git} alt="git" /> Git</p>
                            <p><img src={github} alt="github" /> GitHub</p>
                            <p><img src={vscode} alt="vscode" /> VS Code</p>
                        </div>
                    </div>

                </article>
            </section>
        </>
    );
};

export default Skill;