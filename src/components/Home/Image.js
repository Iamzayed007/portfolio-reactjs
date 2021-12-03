import React from 'react';
import mypic from '../image/zayed.png'
import Typewriter from 'typewriter-effect';

const Image = () => {
    return (
        <div className=" bg-gray-200 py-10  rounded-xl shadow-lg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')", backgroundSize:"100% 100%"}}>
            <div className="relative flex justify-center lg:absolute lg:top-60  lg:justify-start lg:left-40">
                <h1  className="text-2xl text-green-600 lg:text-6xl font-bold text-center mb-10"
                data-aos="fade-up"
                data-aos-duration="3000"
                >
                    {/* Hi, This is <br /> <br /> */}
                    <span className="text-green-900"> Md. Zayed Hasan</span> <br/> <br/>
                    <TypeWriter/>
                </h1>
            </div>
            <div className=" relative flex justify-center lg:justify-end lg:right-52  lg:top-32 "
            data-aos="fade-left"
            data-aos-duration="3000"
            >
                <img
                    className="w-52 lg:w-72"
                    src={mypic} alt="" />
            </div>

        </div>

    );
};

const TypeWriter=()=>{
    return(
        <Typewriter
  options={{
    strings: ['Web Developer', 'Frontend Developer','MERN Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
    )
}

export default Image;