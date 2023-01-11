import React from 'react';
import mypic from '../image/zayed.png'
// import bgpic from '../image/zayed.JPG'
import bgpic from '../image/demo3.jpg'
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';

import { Icon } from 'react-icons-kit'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {addressBook} from 'react-icons-kit/fa/addressBook'
import './Home.css'

const Image = () => {
    return (
        <div className=" w-full bg-custom" >
            <div className="bannerContent w-full bg-gray-200 py-10   shadow-lg" style={{backgroundImage:`url(${bgpic})`, backgroundSize:"100% 100%"}}>

            </div>
            <div className="relative flex justify-center opacity-100 lg:absolute lg:top-60  lg:justify-start lg:left-40 ">
                <h1  className="text-2xl lg:text-6xl  text-center mb-10 "
                data-aos="fade-up"
                data-aos-duration="1000"
                >
                    {/* Hi, This is <br /> <br /> */}
                    <span className="text-white font-bold opacity-100"> Md. Zayed Hasan</span> <br/> <br/>
                    <TypeWriter/>
                </h1>
            </div>
            <div className=" relative flex justify-center lg:justify-end lg:right-52  lg:top-32  "
            data-aos="fade-down"
            data-aos-duration="1000"
            >
                <img
                    className="w-52 opacity-100 lg:w-72 hover:shadow-xl transform  hover:scale-110 transition duration-500 mx-auto md:mx-0 "
                    src={mypic} alt="" />
            </div>

            <div className=" relative flex justify-center mt-6 w-full lg:right-64 lg:justify-end  lg:top-32  "
            data-aos="fade-right"
            data-aos-duration="1000"
            >
         <a target="_blank" href="https://github.com/Iamzayed007"   class="mt-2 mr-2  mb-4 py-2 px-3 rounded-full  text-white tracking-widest  transition duration-200"><Icon size={32} icon={githubSquare} /></a>
         <a target="_blank" href="https://www.linkedin.com/in/iamzayed/"   class="mt-2 mr-2  mb-4 py-2 px-3 rounded-full  text-white tracking-widest  transition duration-200"><Icon size={32} icon={linkedinSquare} /></a>
         <HashLink to="/#contact"  class="mt-2  mb-4 py-2 px-3 rounded-full  text-white tracking-widest  transition duration-200"><Icon size={32} icon={addressBook} /> </HashLink>

            </div>

        </div>

    );
};

const TypeWriter=()=>{
    return(
        <Typewriter
  options={{
    strings: ['Software Engineer','Web Developer', 'Frontend Developer','MERN Developer'],
    autoStart: true,
    loop: true,
  }}
/>
    )
}

export default Image;