import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import './Bio.css';

const Bio = () => {
    
    const {markdownRemark: bio} = useStaticQuery(graphql`
        query {
            markdownRemark(frontmatter: {title: {eq: "Bio"}}) {
                html
            }
        }
    `);
    
    return (
        <section id="bio" className="text-2xl tracking-widest">
            <div dangerouslySetInnerHTML={{__html: bio.html}} />
        </section>
    )

}

export default Bio;