import React from 'react';
import img from '../image/photo-1587833823162-763b9eab0f74.jpeg'
import travel from '../../assets/image/projects/travel.jpeg'
import car from '../../assets/image/projects/car.jpeg'
import medicare from '../../assets/image/projects/medicare.jpeg'
const Projects = () => {

  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
 
    return (
        <div id="projects" className="relative lg:text-white top-44 ">
            {/* <h1 className="text-6xl text-center">Projects
            </h1> */}
            {/* <img style={imgStyle} src={img} alt="" /> */}


            <div class=" py-14">
    {/* <h3 class="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3> */}
    <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Projects</h1>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">
      {/* <!-- box-1 --> */}
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
       data-aos="fade-up-right"
       data-aos-duration="3000"
      >
        <div class="w-sm">
          <img class="object-cover h-48 w-64" src={travel} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Traventur</h1>
            <p class="mt-4 text-gray-600">An online Traventure- (A tour guide) booking app. Developed by ReactJS, Bootstrap, Mongodb, NodeJS, Express JS, Firebase, Heroku.</p>
           <div className="flex" >

           <a target="_blank" href="https://traveler-duo.web.app/" class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200">Live Server</a>
            <a target="_blank" href="https://github.com/Iamzayed007/Travel-Client-Site-ReactJs" class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200">Client Site</a>
            <a target="_blank" href="https://github.com/Iamzayed007/Travel-Server-Site-" class="mt-8 mb-4 py-0  px-4  tracking-widest transition duration-200">Server Site</a>
           </div>
            <button  onClick={() => setShowModal1(true)} class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
          </div>
        </div>
      </div>

      {/* <!-- box-2 --> */}
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
          data-aos="fade-up"
          data-aos-duration="3000"
      >
        <div class="w-sm">
          <img class="object-cover h-48 w-64" src={car} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Car</h1>
            <p class="mt-4 text-gray-600">An online Car Gallery buying website. Developed by ReactJS, Bootstrap, Mongodb, NodeJS, Express JS, Firebase, Heroku.</p>
            <div className="flex" >

            <a target="_blank" href="https://wheels-59842.web.app/" class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200">Live Server</a>
            <a target="_blank" href="https://github.com/Iamzayed007/car-client-site-reactjs" class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200">Client Site</a>
            <a target="_blank" href="https://github.com/Iamzayed007/car-server-site-expressJs" class="mt-8 mb-4 py-0  px-4  tracking-widest transition duration-200">Server Site</a>
</div>
            <button  onClick={() => setShowModal2(true)} class="mt-12 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
          </div>
        </div>
      </div>

      {/* <!-- box-3 --> */}
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
          data-aos="fade-up-left"
          data-aos-duration="3000"
      >
        <div class="w-sm">
          <img class="object-cover h-48 w-64" src={medicare} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Medi Care</h1>
            <p class="mt-4 text-gray-600">A Hospital Management system for a software limited. Developed by ReactJS, Bootstrap, Firebase </p>
            <div className="flex" >

            <a target="_blank" href="https://medi-care-14bc7.web.app/" class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200">Live Server</a>
            <a target="_blank" href="https://github.com/Iamzayed007/hospital-clientsite-reactJs" class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200">Client Site</a>
</div>
            <button  onClick={() => setShowModal3(true)} class="mt-16 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
          </div>
        </div>
      </div>

      {showModal1 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-green-900 font-semibold">
                    Feature
                  </h3>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-green-700">
                  <ul className="mt-4 text-blueGray-500 text-lg leading-relaxed">
                  <li>Easy online booking system</li>
                          <li>This project user can Book Their desire tour by booking procedure</li>
                          <li>Respoisive Design</li>
                  </ul>
                </div>
                <div className="relative p-6 flex-auto text-green-700">
                  <h4 className="text-2xl">Tech Used</h4>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                           <li>HTML5</li>
                          <li>CSS3</li>
                          <li>Bootstrap5</li>
                          <li>MongoDB</li>
                          <li>Firebase</li>
                  </ul>
                  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          <li>React Js</li>
                          <li>Node Js</li>
                          <li>Express Js</li>
                          <li>Heroku</li>
                  </ul>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal2 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-green-900 font-semibold">
                    Feature
                  </h3>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-green-700">
                  <ul className="mt-4 text-blueGray-500 text-lg leading-relaxed">
                          <li>Select your desire car and buy it online</li>
                          <li>Real-time complete website</li>
                          <li>Styled with react-bootstrap</li>
                  </ul>
                </div>
                <div className="relative p-6 flex-auto text-green-700">
                  <h4 className="text-2xl">Tech Used</h4>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                           <li>HTML5</li>
                          <li>CSS3</li>
                          <li>Bootstrap5</li>
                          <li>MongoDB</li>
                          <li>Firebase</li>
                  </ul>
                  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          <li>React Js</li>
                          <li>Node Js</li>
                          <li>Express Js</li>
                          <li>Heroku</li>
                  </ul>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal3 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-green-900 font-semibold">
                    Feature
                  </h3>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-green-700">
                  <ul className="mt-4 text-blueGray-500 text-lg leading-relaxed">
                          <li>Medi Care Hospital system is created for giving medical services to all users.</li>
                          <li>Real-time complete website</li>
                          <li>Styled with bootstrap</li>
                  </ul>
                </div>
                <div className="relative p-6 flex-auto text-green-700">
                  <h4 className="text-2xl">Tech Used</h4>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                           <li>HTML5</li>
                          <li>CSS3</li>
                          <li>Bootstrap5</li>
                         
                  </ul>
                  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          <li>React Js</li>
                          <li>Firebase</li>
                        
                  </ul>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal3(false)}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  </div>
        </div>
    );
};

export default Projects;