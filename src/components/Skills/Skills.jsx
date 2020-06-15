import React from 'react';
import HTMLimg from '../../images/html.png';
import CSSimg from '../../images/css.png';
import JSimg from '../../images/javascript.png';
import JQUERYimg from '../../images/Jquery.png';
import NODEimg from '../../images/nodejs.png';
import CSharpImg from '../../images/800px-C_Sharp_logo.png';


const Skills = () => {
    
    return (
    <section id="skills" className="text-2xl tracking-widest">
        <h1>TECHNOLOGIES</h1>
        <hr />
        <div id="techLogos">
            <img alt="HTML 5" src={HTMLimg}/>
            <img alt="CSS 3" src={CSSimg}/>
            <img alt="Javascript" src={JSimg}/>
            <img alt="Jquery" src={JQUERYimg} />
            <img alt="nodesJS" src={NODEimg} />
            <img alt="C#" src={CSharpImg}/>
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