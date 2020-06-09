import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const Portfolio = () => {
    
    return (
    <section id="portfolio" className="text-2xl tracking-widest">
        <h1>FEATURED PROJECTS</h1>
        <hr/>
        <ul id="portfolio-items" className="px-2">
            <ProjectCard url="https://buckeatlist.herokuapp.com/" title="buckEATlist" imgSrc="../../images/buckeatlist.png"/>
            <ProjectCard url="https://michaelhrivnak.github.io/JobRocket/" title="Job Rocket" imgSrc="../../images/JobRocketReadme.png"/>
            <ProjectCard url="https://michaelhrivnak.github.io/Password-Generator/" title="Password Generator" imgSrc="../../images/PasswordGenerator.png"/>
            <ProjectCard url="https://michaelhrivnak.github.io/Weather-Dashboard/" title="Weather Dashboard" imgSrc="../../images/WeatherDashboard.png"/>
            <ProjectCard url="https://github.com/michaelhrivnak/Fitness-Tracker" title="Fitness Tracker" imgSrc="../../images/FitnessTracker.png"/>
            <ProjectCard url="https://github.com/michaelhrivnak/Employee-Tracker" title="Employee Tracker" imgSrc="../../images/EmployeeTracker.png"/>
        </ul>   
    </section>)

}

export default Portfolio;