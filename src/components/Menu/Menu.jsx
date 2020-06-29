import React, {useState, useEffect} from 'react';

const MAX_WIDTH = 1457;

const Menu = () => {
        
    const [isSmallScreen, setIsSmallScreen] = useState();

    const handleWindowResize = () => { 
        if(typeof window !== undefined){
            setIsSmallScreen(window.innerWidth <= MAX_WIDTH);       
        }       
    }

    useEffect( () =>{     
        handleWindowResize();   
        window.addEventListener('resize', handleWindowResize);
    } ,[handleWindowResize]);

    return (
    <ul id="menu" className="fixed text-right pr-3 pl-5 list-none right-0">
        {!isSmallScreen && <li><a className="top" href="#">MENU</a></li>}
        <li><a href="#bio">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <style jsx>{`
            .top{
                font-size: 1.3rem;
            }
            ul{
                position: fixed;
                top: 15px;
                right:0;
                margin-right: 15px;
                list-style-type: none;                
            }
            li{
                letter-spacing: 0.2rem;
                margin-bottom: 8px;
            }
            a:after {
                display:block;
                content: '';
                border-bottom: solid 2px var(--colour-main-hex);  
                transform: scaleX(0);  
                transition: transform 0.25s ease-in-out;
            }
            a:hover:after, a:focus:after {
                transform: scaleX(1); 
            }        
            a:after{ 
                transform-origin:  0% 50%;
            }
            @media only screen and (max-width: 1457px) {
                #menu {
                    display:flex;
                    width: 100%;
                    background-color: var(--colour-main-hex) !important;
                    justify-content: space-around;
                    align-items: center;
                    color: white;
                    padding: 15px 0;
                    left:0;
                    top:0;   
                    z-index: 1000; 
                    flex-wrap:wrap;                
                }
                li{
                    margin:0 10px;
                }
                a:after{
                    border-bottom: solid 2px white;
                }
            }
        `}</style>
    </ul>)

}

export default Menu