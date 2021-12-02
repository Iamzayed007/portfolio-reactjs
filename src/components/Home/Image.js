import React from 'react';
import mypic from '../image/zayed.png'

const Image = () => {
    return (
        <div className=" bg-gray-100 py-10  rounded-xl shadow-lg">
            <div className="relative flex justify-center lg:absolute lg:top-60  lg:justify-start lg:left-40">
                <h1 className="text-2xl text-green-600 lg:text-6xl font-bold text-center mb-10">
                    Hi, This is <br /> <br />
                    <span className="text-green-900"> Md. Zayed Hasan</span>
                </h1>
            </div>
            <div className=" relative flex justify-center lg:justify-end lg:right-52  lg:top-32 ">
                <img
                    className="w-52 lg:w-72"
                    src={mypic} alt="" />
            </div>

        </div>

    );
};

export default Image;