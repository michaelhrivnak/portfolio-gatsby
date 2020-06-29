import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/Intro/Intro";
import Bio from "../components/Bio/Bio";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Menu from "../components/Menu/Menu";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu/>
    <Intro/>
    <Bio/>
    <Skills/>
    <Portfolio/>
    <Resume/>
    <Contact/>    
  </Layout>
)

export default IndexPage
