import React from 'react';
import About from '../About/About';
import BgParticles from '../BgParticles/BgParticles';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Image from './Image';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <div className='bg-custom'>
            {/* <BgVideo /> */}
            {/* <BgParticles/> */}
            <Image />
            <About />
            <Skills />
            <Projects />
            <Contact />
            {/* <Footer/> */}
        </div >
    );
};

export default Home;