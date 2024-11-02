import React from 'react';

import { Icon } from 'react-icons-kit'
import {copyright} from 'react-icons-kit/fa/copyright'
import './Footer.css'
const Footer = ({logoTag}) => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
        <div className="w-50 fontPlaywrite bg-gray-300 pb-5">
            <span className='ml-8'>
            {"</"}{logoTag}{">"}
            </span>
            </div>
        <div className="w-50 bg-custom text-gray-300 pt-4">
            <div className='flex justify-center fontPlaywrite'>
                

            </div>
        </div>
    </div>
    );
};

export default Footer;