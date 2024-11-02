import React from 'react';
import emailjs from "emailjs-com";
import ImageContainer from '../ui/ImageContainer/ImageContainer';
import Box from '../ui/Box/Box';
import mypic from '../../assets/image/MyImage.png'
import emailQR from '../../assets/image/Email_QR_200.png'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_yp173kn','template_dp7boo8', e.target, 'user_AMYYXFcT38ODNwzeNMA2r')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset()
    }

    return (
      <div className='container mx-auto fontPlaywrite'>
      <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-gray-300 w-50">
              <div className="md:ml-8 mt-5">

                  <div className='text-xl'>
                 <p className='text-2xl font-semibold'>Say Hello to New Possibilities!<br /></p>
                  <h2 className='font-bold mt-5 mb-4'>@Email: zayedhasan3.1416@gmail.com</h2>
                  <h2 className='font-bold mt-5 mb-4'>Scan to Connect:</h2>
                 
              </div>
              <div className="mt-12 flex justify-center">
                 <Box className="w-44 h-48">
                 <ImageContainer src={emailQR} className="w-44 h-48 pb-1"/>
            
                 </Box>
              </div>
              </div>
          </div>
          <div className="bg-custom w-50 min-h-screen pb-28">
              <div className='relative left-28 top-24 py-6 w-22rem h-30rem border-2 border-gray-600 bg-gray-400'>
              <div className='ml-5 w-22rem'>       
              <ImageContainer src={mypic} className="border-2 border-gray-600  bg-gray-600 pt-6"/>
              </div>
              </div>
        
          </div>
      </div>
  </div >
    );
};

export default Contact;