import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    

    return (
    <li className="portfolio-item-wrapper">
        <img alt=""  className="portfolio-image" src={`/${props.imgSrc}`}/>
        <p>{props.desc}</p>
        <div className="techIcons">
            {props.tech.map(t => 
                <img key={t.name} alt={t.name} src={`/${t.icon}`}/>
            )}
        </div>
        <div className="links">
            <h3 className="portfolio-name">{props.title}</h3>
            <div>
                {props.url && <a href={props.url}>            
                    View Deployment
                </a>}            
                {props.repo && <a href={props.repo}>            
                    View Repo
                </a>}
            </div>
        </div>
        <style jsx>{`  
            a{
                text-decoration:none;
                margin: 0 5px;
            }       
            p{
                text-align:center;
                padding: 0 5px;
                margin-bottom:0;
            }   
            .techIcons{
                display:flex;
                padding:2px;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
            }
            .techIcons > img{
                width: 40px;
                height: auto;
                margin: auto;
                
            }   
            .portfolio-item-wrapper{                
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
                margin-bottom:0;
            }
            .links{
                padding: 15px 0;    
                background-color: #467C8A;
                color: #ffffff; 
            }
            .links > div{
                display: flex;
                width: 100%;
                flex-wrap:wrap;
                justify-content:space-around;
            }
            .portfolio-name{
                text-decoration: none;
                text-align: center;
                white-space: nowrap; 
                margin-bottom: 10px;
            }
        `}</style>
    </li>)
}

export default ProjectCard;