import React, { useState } from 'react';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { Icon } from 'react-icons-kit'
import {alignJustify} from 'react-icons-kit/fa/alignJustify'

const Header = ({logoTag}) => {
    const [show, setShow] = useState()
    return (
        <>
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="w-50 fontPlaywrite bg-gray-300 pt-4">
                <span className='ml-8'>
                {"<"}{logoTag}{">"}
                </span>
                </div>
            <div className="w-50 bg-custom text-gray-300 pt-4">
                <div className='flex justify-center fontPlaywrite'>
                    <div className='mx-3'>
                        <HashLink to='/'>Home</HashLink>
                    </div>
                    <div className='mx-3'>
                        <HashLink to='/skills'>Skills</HashLink>
                    </div>
                    {/* <div className='mx-3'>
                    <HashLink to='/projects'>Projects</HashLink>
                    </div> */}
                    <div className='mx-3'>
                    <HashLink to='/contact'>Contact</HashLink>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

export default Header;