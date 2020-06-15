import React from 'react';
import {useStaticQuery, graphql} from "gatsby";

const Skills = () => {
    
    const {allSkillsJson: {edges: skills}} = useStaticQuery(graphql`
        query{
            allSkillsJson{
                edges{
                    node{
                        id
                        img
                        alt
                        skill
                    }
                }               
            }
        }
    `);

    return (
    <section id="skills" className="text-2xl tracking-widest">
        <h1>TECHNOLOGIES</h1>
        <hr />
        <div id="techLogos">
            {skills.map(({node:skill})=>
                <img alt={skill.img} src={`/${skill.img}`}/>
            )}
        </div>
        <style jsx>{`
            #techLogos{
                display:flex;
                padding:20px;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            #techLogos > img{
                width: 100px;
                height: auto;
                margin: auto;
                
            }
        `}</style>
    </section>
    )

}

export default Skills;