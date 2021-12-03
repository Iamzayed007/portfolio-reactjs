import React from 'react';
import About from '../About/About';
import BgParticles from '../BgParticles/BgParticles';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Image from './Image';

const Home = () => {

    return (
        <div>
            {/* <BgVideo /> */}
            {/* <BgParticles/> */}
            <Image />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div >
    );
};

export default Home;