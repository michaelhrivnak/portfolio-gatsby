import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    

    return (
    <li className="portfolio-item-wrapper">
        <a href={props.url}>
            <img alt=""  className="portfolio-image" src={`/${props.imgSrc}`}/>
            <div className="portfolio-name">{props.title}</div>
        </a>
        <style jsx>{`        
            .portfolio-item-wrapper{
                display:flex;
                margin:auto;
                margin-bottom:25px;

                /* margin: 0 25px 40px 25px; */    
                min-width: 200px;
                max-width: 350px;
                height: auto; 
                border: 2px solid #666666;       
                box-shadow: -2px -2px 2px 2px rgb(162,162,162,0.3);  
                
            }
            .portfolio-image{
                width:inherit;   
                opacity: 0.7;      
            }
            .portfolio-name{
                text-decoration: none;    
                text-align: center;    
                white-space: nowrap;   
                color: #ffffff;
                padding: 15px 0;    
                background-color: #467C8A;
        `}</style>
    </li>)
}

export default ProjectCard;