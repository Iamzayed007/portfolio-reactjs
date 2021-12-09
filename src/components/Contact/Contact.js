import React from 'react';
import img from '../image/photo-1598760122223-45f0f18a1bbd.jpeg'
const Contact = () => {


    return (
        <div id="contact" className="relative   top-40 py-24 ">
            <h1 className="text-6xl text-green-600 text-center py-4">Contact</h1>
            {/* <img style={imgStyle} src={img} alt="" /> */}

            <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12"  >
            {/* style="background-image: url('https://picsum.photos/id/1018/1000')" */}
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-20 py-1 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" 
      data-aos="zoom-out"
      data-aos-duration="3000"
    >
    {/* style="backdrop-filter: blur(20px);" */}
      <div class="max-w-md mx-auto">
        <div>
          {/* <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" class="h-16 sm:h-24" /> */}
          {/* <h1 className="text-6xl text-green-600 text-center py-4">Contact</h1> */}

        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p className="mb-16 ">Email: zayedhasan3.1416@gmail.com</p>
            {/* <ul class=" space-y-2">
              <li class="flex items-start">
              
                
                  
                  <input type="text" placeholder="Name"
                  className="w-full h-10 border-gray-900 bg-green-300 rounded-lg"

                  />
               
              </li>
              <li class="flex items-start">
                
              <input type="text" placeholder="Name"
                  className="w-full h-10 border-gray-900 bg-green-300 rounded-lg"

                  />
              </li>
              <li class="flex items-start">
               
              <input type="text" placeholder="Name"
                  className="w-full h-10 border-gray-900 bg-green-300 rounded-lg"

                  />              </li>
            </ul> */}
            <form action=""
            className="space-y-4"
            >
            <input type="text" placeholder="Name"
                  className="w-full h-10 border-gray-900 bg-green-100 rounded-lg"

                  />   
            <input type="text" placeholder="Email"
                  className="w-full h-10 border-gray-900 bg-green-100 rounded-lg"

                  />   
            <input type="text" placeholder="Subject"
                  className="w-full h-10 border-gray-900 bg-green-100 rounded-lg"

                  />   
            <textarea type="text" placeholder="Message"
                  className="w-full h-36 border-gray-900 bg-green-100 rounded-lg"

                  />  
                  
                  <button class="mt-8 mb-4 py-1 px-6 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Submit</button>
 
            </form>
            
                  
                         </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>See me on <a target="_blank" class="font-bold text-blue-700" href="https://www.linkedin.com/in/iamzayed/"> LinkedIn </a>
            <a target="_blank" class="font-bold text-blue-700" href="https://github.com/Iamzayed007"> Github </a>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;