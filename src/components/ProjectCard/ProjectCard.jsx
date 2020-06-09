import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    
    return (
    <li className="portfolio-item-wrapper">
        <a href={props.url}>
            <img alt=""  className="portfolio-image" src={props.imgSrc}/>
            <div className="portfolio-name">{props.title}</div>
        </a>
    </li>)
}

export default ProjectCard;