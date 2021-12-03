import React from 'react';
import img from '../image/photo-1598760122223-45f0f18a1bbd.jpeg'
const Contact = () => {
    const imgStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-1"
    }

    return (
        <div id="contact" className="relative  lg:text-white top-52 h-72">
            <h1 className="text-6xl text-green-600 text-center py-4">Contact</h1>
            {/* <img style={imgStyle} src={img} alt="" /> */}

            <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12"  >
            {/* style="background-image: url('https://picsum.photos/id/1018/1000')" */}
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style={{backdropFilter:"blur(20px)"}}>
    {/* style="backdrop-filter: blur(20px);" */}
      <div class="max-w-md mx-auto">
        <div>
          {/* <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" class="h-16 sm:h-24" /> */}
          {/* <h1 className="text-6xl text-green-600 text-center py-4">Contact</h1> */}

        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>Tailwind CSS update bring a new powerful features.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Customizing style and create design system
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Just-In-Time : The Next Generation of Tailwind CSS
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">Tailwind CSS from Zero to Production</p>
              </li>
            </ul>
            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>See me on <a class="font-bold text-blue-700" href="https://www.linkedin.com/in/ferdianar/"> LinkedIn </a></p>
            <p>
              <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
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