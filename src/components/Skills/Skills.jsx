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
                <div key={skill.id} className="hvr-float-shadow">
                    <img className="img" alt={skill.skill} src={`/${skill.img}`}/>
                </div>
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
            .img{
                width: 100px;
                height: auto;
                margin: auto;                
            }
            /* Float Shadow */
            .hvr-float-shadow {
                display: inline-block;
                vertical-align: middle;
                -webkit-transform: perspective(1px) translateZ(0);
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                position: relative;
                -webkit-transition-duration: 0.3s;
                transition-duration: 0.3s;
                -webkit-transition-property: transform;
                transition-property: transform;
            }
            .hvr-float-shadow:before {
                pointer-events: none;
                position: absolute;
                z-index: -1;
                content: '';
                top: 100%;
                left: 5%;
                height: 10px;
                width: 90%;
                opacity: 0;
                background: -webkit-radial-gradient(center, ellipse, var(--colour-main-rgba) 0%, rgba(0, 0, 0, 0) 80%);
                background: radial-gradient(ellipse at center, var(--colour-main-rgba) 0%, rgba(0, 0, 0, 0) 80%);
            /* W3C */
                -webkit-transition-duration: 0.3s;
                transition-duration: 0.3s;
                -webkit-transition-property: transform, opacity;
                transition-property: transform, opacity;
            }
            .hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
                -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
                /* move the element up by 5px */
            }
            .hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
                opacity: 1;
                -webkit-transform: translateY(5px);
                transform: translateY(5px);
                /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
            }
        `}</style>
    </section>
    )

}

export default Skills;