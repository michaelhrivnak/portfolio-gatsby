import React from 'react';

const Intro = () => {
    
    return (
        <section id="intro" className="text-2xl tracking-widest">
        <h1>MICHAEL HRIVNAK</h1><br/>
        <h1>FULL STACK DEVELOPER</h1><br/>
        <h1>TORONTO, ONTARIO</h1><br/>
        <style jsx>{`
        h1{
            display: inline-block;
            border-bottom: 2px solid var(--colour-bg);            
        }     
        h1:after {
            display:block;
            content: '';
            border-bottom: solid 3px var(--colour-main-hex);;  
            transform: scaleX(0);  
            transition: transform 0.4s ease-in-out;
        }
        h1:hover:after {
            transform: scaleX(1); 
        }        
        h1:after{ 
            transform-origin:  0% 50%;
        }
        `}</style>
    </section>)
}

export default Intro;