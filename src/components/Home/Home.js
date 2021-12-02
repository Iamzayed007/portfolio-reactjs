import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Image from './Image';

const Home = () => {

    return (
        <div>
            {/* <BgVideo /> */}

            <Image />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div >
    );
};

export default Home;