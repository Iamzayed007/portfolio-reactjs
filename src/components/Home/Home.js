import React from 'react';
import About from '../About/About';
import BgParticles from '../BgParticles/BgParticles';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Image from './Image';
import Footer from '../Footer/Footer';
import ImageContainer from '../ui/ImageContainer/ImageContainer';
import mypic from '../../assets/image/MyImage.png'
const Home = () => {

    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-gray-300 w-50"></div>
                <div className="bg-custom w-50 min-h-screen py-2">
                    <div className='relative left-28 top-36 z-10 border-2 border-gray-600 py-6 bg-gray-400 w-22rem h-30rem'></div>
                    <div className='max-h-64'>       
                    <ImageContainer src={mypic} className="image border-2 border-gray-600 pt-6 bg-gray-600 z-40"/>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;