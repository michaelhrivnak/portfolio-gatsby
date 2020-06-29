import React from 'react';
import resumePdf from '../../Documents/resume.pdf';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const Resume = (props) => {
    
    return (
    <section id="resume" className="text-2xl tracking-widest">
        <h1>RESUME</h1>
        <hr/>
        <div id="resumeBody">
            <a href={resumePdf} rel="noopener noreferrer" target="_blank">View Resume <FontAwesomeIcon size="1x" icon={faExternalLinkAlt}/></a>
        </div>
        <style jsx>{`
            a{
                font-size: 1.5rem;
                letter-spacing: 0.1em;
            }
            a:hover, a:focus{
                color: var(--colour-main-hex);
            }            
        `}</style>
    </section>)

}

export default Resume;