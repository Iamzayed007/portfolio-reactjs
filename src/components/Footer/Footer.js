import React from 'react';

import { Icon } from 'react-icons-kit'
import {copyright} from 'react-icons-kit/fa/copyright'
import './Footer.css'
const Footer = () => {
    return (
        <>

            <div className="footerContent relative z-50 h-16 pt-5 flex justify-center   ">
                <p className="text-2xl text-white" >  <Icon size={32} icon={copyright} /> Zayed</p>
            </div>
            
        </>
    );
};

export default Footer;