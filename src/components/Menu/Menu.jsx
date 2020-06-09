import React from 'react';
import './Menu.css';

const Menu = () => {
    
    return (
    <ul id="menu" className="fixed text-right pr-3 pl-5 list-none right-0">
        <li><a href="#bio">BIO</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>)

}

export default Menu