import React from 'react';
import mypic from '../image/zayed.png'
import Typewriter from 'typewriter-effect';
import { HashLink } from 'react-router-hash-link';

import { Icon } from 'react-icons-kit'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {addressBook} from 'react-icons-kit/fa/addressBook'


const Image = () => {
    return (
        <div className="w-full bg-gray-200 py-10  rounded-xl shadow-lg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')", backgroundSize:"100% 100%"}}>
            <div className="relative flex justify-center lg:absolute lg:top-60  lg:justify-start lg:left-40 ">
                <h1  className="text-2xl text-green-600 lg:text-6xl  text-center mb-10 "
                data-aos="fade-up"
                data-aos-duration="2000"
                >
                    {/* Hi, This is <br /> <br /> */}
                    <span className="text-green-900 font-bold"> Md. Zayed Hasan</span> <br/> <br/>
                    <TypeWriter/>
                </h1>
            </div>
            <div className=" relative flex justify-center lg:justify-end lg:right-52  lg:top-32  "
            data-aos="fade-down"
            data-aos-duration="2000"
            >
                <img
                    className="w-52 lg:w-72 hover:shadow-xl transform  hover:scale-110 transition duration-500 mx-auto md:mx-0 "
                    src={mypic} alt="" />
            </div>

            <div className=" relative flex justify-center mt-6 w-full lg:w-96  lg:ml-0 lg:justify-start lg:left-32  lg:top-32  "
            data-aos="fade-right"
            data-aos-duration="2000"
            >
         <a target="_blank" href="https://github.com/Iamzayed007"   class="mt-2 mr-2  mb-4 py-2 px-3 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200"><Icon size={32} icon={githubSquare} /></a>
         <a target="_blank" href="https://www.linkedin.com/in/iamzayed/"   class="mt-2 mr-2  mb-4 py-2 px-3 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200"><Icon size={32} icon={linkedinSquare} /></a>
         <HashLink to="/#contact"  class="mt-2  mb-4 py-2 px-3 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200"><Icon size={32} icon={addressBook} /> </HashLink>

            </div>

        </div>

    );
};

const TypeWriter=()=>{
    return(
        <Typewriter
  options={{
    strings: ['Web Developer', 'Frontend Developer','MERN Developer'],
    autoStart: true,
    loop: true,
  }}
/>
    )
}

export default Image;