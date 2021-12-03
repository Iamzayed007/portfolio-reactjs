import React from 'react';
import aboutImg from '../image/img-1.jpeg'

const About = () => {

    return (
        <div id="about" className="relative  lg:text-green-600 top-44"
        data-aos="zoom-in"
     data-aos-duration="3000"
        >
            <h1 className="text-6xl  text-center my-10 ">About</h1>
            <div className="flex justify-center  ">
                <h4 className=" text-center w-96 text-2xl py-10 rounded-xl shadow-lg bg-white lg:w-1/2">I am looking forward to work in an organization where I can get to learn things to achieve my desire and improve my skills. I would love to work for any organization that is related to create content, web development, problem solving etc.</h4>
            </div>
            <div>
                {/* <BgVideo /> */}

                {/* <img style={imgStyle} src={aboutImg} alt="" /> */}
            </div>
        </div>
    );
};

export default About;