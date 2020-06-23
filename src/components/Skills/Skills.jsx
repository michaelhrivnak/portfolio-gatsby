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
    <section id="skills">
        <h1>TECHNOLOGIES</h1>
        <hr />
        <div id="techLogos">
            {skills.map(({node:skill})=>
                <img key={skill.id} alt={skill.skill} src={`/${skill.img}`}/>
            )}
        </div>
        <style jsx>{`
            #techLogos{
                display:flex;
                padding:20px;
                flex-wrap: wrap;
                align-items: flex-start; /* new */
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