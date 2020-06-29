import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

const ProjectCard = (props) => {
    
    const [hover, setHover] = useState(false);
    
    return (
    <li className="portfolio-item-wrapper" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img alt=""  className="portfolio-image" src={`/${props.imgSrc}`}/>
        <p className="desc">{props.desc}</p>
        <div className="techIcons">
            {props.tech.map(t => 
                <img key={t.name} alt={t.name} src={`/${t.icon}`}/>
            )}
        </div>
        <div className="links">
            <h3 className="portfolio-name">{props.title}</h3>
            <div>
                {props.url && <a href={props.url}>            
                    View Deployment <FontAwesomeIcon size="1x" icon={faExternalLinkAlt}/>
                </a>}            
                {props.repo && <a href={props.repo}>            
                    View Repo <FontAwesomeIcon size="1x" icon={faExternalLinkAlt}/>
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
                border-radius: 4px;   
                transition: all .25s;
                box-shadow: ${hover? "0px 0px 5px 5px #467C8A55" :"2px 2px 2px 2px rgb(162,162,162,0.3)"};  
                
            }
            .desc{
                font-weight: ${hover? "bold":"unset"};
            }
            .portfolio-image{
                width:inherit;                 
                opacity: ${hover? 1 : 0.5};      
                margin-bottom:0;
                transition: opacity .25s;
            }            
            .links{
                padding: 15px 0;    
                background-color: var(--colour-main-hex);
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