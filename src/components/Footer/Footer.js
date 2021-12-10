import React from 'react';

import { Icon } from 'react-icons-kit'
import {copyright} from 'react-icons-kit/fa/copyright'

const Footer = () => {
    return (
        <div>

<div className="relative top-24 h-16 pt-5 flex justify-center text-green-900   ">
                <p className="text-2xl" >  <Icon size={32} icon={copyright} /> Zayed</p>
            </div>
            
        </div>
    );
};

export default Footer;