import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useStaticQuery, graphql } from "gatsby";

const Portfolio = () => {
    
    const {allProjectsJson: {edges: projects}} = useStaticQuery(graphql`
        query{
            allProjectsJson{
                edges{
                    node{
                        id
                        url
                        title
                        img
                        repo
                        desc
                        tech{
                            name
                            icon
                        }
                    }
                }               
            }
        }
    `);

    console.log(projects);

    return (
    <section id="portfolio" className="text-2xl tracking-widest">
        <h1>FEATURED PROJECTS</h1>
        <hr/>
        <ul id="portfolio-items" className="px-2">
            {projects.map( ({node:project}) => 
                <ProjectCard  key={project.id} url={project.url} title={project.title} tech={project.tech} desc={project.desc} repo={project.repo} imgSrc={project.img}/>
            )}
        </ul>   
        <style jsx>{`
            #portfolio-items{
                display:flex;
                flex-wrap: wrap;
                justify-content: space-between;
                list-style-type: none;
            }            
        `}</style>
    </section>)

}

export default Portfolio;