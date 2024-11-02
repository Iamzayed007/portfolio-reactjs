import React from 'react';
import ImageContainer from '../ui/ImageContainer/ImageContainer';
import mypic from '../../assets/image/MyImage.png'
import TypeWriter from '../TypeWriter/TypeWriter';
import './Home.css'
import Box from '../ui/Box/Box';
const Home = () => {

    return (
        <div className='container mx-auto fontPlaywrite'>
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-gray-300 w-50">
                    <div className="md:ml-8 mt-5">

                        <div className='text-3xl'>
                       <p className='text-2xl font-semibold'>Delighted you’re here , This is <br /></p>
                        <h2 className='font-bold mt-5 mb-4'>Md. Zayed Hasan</h2>
                        <TypeWriter/>
                    </div>
                    <div className="mt-24">
                       <Box className="w-22rem h-48">
                       <div className='text-gray-300 text-[10px] text-center align-middle mt-2'>
                       I am dedicated to investing my time and expertise to enhance the organization's capabilities. I look forward to applying my technical acumen and management skills effectively to drive impactful results and contribute meaningfully to our collective success.
                       </div>
                       </Box>
                    </div>
                    </div>
                </div>
                <div className="bg-custom w-50 min-h-screen pb-28">
                    <div className='relative left-28 top-24 py-6 w-22rem h-30rem border-2 border-gray-600 bg-gray-400'>
                    <div className='ml-5 w-22rem'>       
                    <ImageContainer src={mypic} className="border-2 border-gray-600  bg-gray-600 pt-6"/>
                    </div>
                    </div>
              
                </div>
            </div>
        </div >
    );
};

export default Home;