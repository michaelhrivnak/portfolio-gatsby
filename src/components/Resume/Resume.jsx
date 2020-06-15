import React from 'react';
import resumePdf from '../../Documents/resume.pdf';

const Resume = (props) => {
    
    return (
    <section id="resume" className="text-2xl tracking-widest">
        <h1>RESUME</h1>
        <hr/>
        <div id="resumeBody">
            <a href={resumePdf} rel="noopener noreferrer" target="_blank">View Resume</a>
        </div>
        <style jsx>{`
            a{
                font-size: 1.5rem;
                letter-spacing: 0.1em;
            }
        `}</style>
    </section>)

}

export default Resume;