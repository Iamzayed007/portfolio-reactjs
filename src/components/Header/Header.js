import React, { useState } from 'react';
import './Header.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [show, setShow] = useState()
    return (
        <>
            <div className="hidden z-10 bg-green-300 lg:text-green-900 lg:h-20 lg:flex lg:adsolute  ">
                <div className="ml-10  mt-4 lg:mr-4 text-2xl " >
                    <HashLink to="/" className=" hover:text-green-900" >Home</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-2xl">
                    <HashLink to="/#about" className="hover:text-green-900" >About</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-2xl">
                    <HashLink to="#skills" className="hover:text-green-900" >Skills</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-3xl">
                    <HashLink to="#projects" className="hover:text-green-900" >Projects</HashLink>

                </div>
                <div className="ml-10  mt-4 mr-4 text-2xl">
                    <HashLink to="#contact" className="hover:text-green-900" >Contact</HashLink>

                </div>
            </div>

            <div className="lg:hidden flex justify-end text-green-600 mt-10 mr-10 bg-green-100">
                <button
                    onClick={() => setShow(!show)}
                >
                    Menu
                </button>
            </div>

            {
                show &&
                <div className=" z-10 text-white  flex flex-col adsolute  ">
                    <div className="ml-10  mt-4 lg:mr-4 text-lg " >
                        <HashLink to="/" className=" hover:text-green-900" >Home</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="/#about" className="hover:text-green-900" >About</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="#skills" className="hover:text-green-900" >Skills</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="#projects" className="hover:text-green-900" >Projects</HashLink>

                    </div>
                    <div className="ml-10  mt-4 mr-4 text-lg">
                        <HashLink to="#contact" className="hover:text-green-900" >Contact</HashLink>

                    </div>

                </div>
            }
        </>
    );
};

export default Header;