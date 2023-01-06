import React,{useState} from 'react';
import {allProjects} from './ProjectData'
const AllProjects = () =>  {



    return (
        <div className="relative lg:text-white">
           


            <div class=" py-6">
                <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Projects</h1>

                {/* <!-- Box --> */}
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                    {/* <!-- box-1 --> */}
                  <div className="lg:grid lg:grid-cols-3 lg:gap-4">
                  { allProjects.mern.map((project,index)=> <Project
                   key={index}
                   project={project}
                
                   ></Project>

                   )}
                  </div>
                </div>
            </div>

       

        </div>
    );
};

const Project=(props)=>{
    const [showModal, setShowModal] = useState(false);
    const {name,description,img,features,techUsed1,techUsed2,clientSite, serverSite,liveSite}=props.project

return(
    <>
    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
                        data-aos="fade-up-right"
                        data-aos-duration="1000"
                    >
                        <div class="w-sm">
                            {img &&<img class="object-cover h-48 w-64" src={img} alt=""
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            />}
                            <div class="mt-4 text-green-900 text-center">
                                <h1 class="text-xl font-bold">{name}</h1>
                                <p class="mt-4 text-gray-900">{description} </p>
                                <div className="flex" >
{liveSite &&
                                    <a target="_blank" href={liveSite} class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >Live Server</a>}
                                { clientSite &&   <a target="_blank" href={clientSite} class="mt-8 mb-4 py-0 mr-1 px-4  tracking-widest transition duration-200"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >Client Site</a>}
                                  {serverSite &&  <a target="_blank" href={serverSite} class="mt-8 mb-4 py-0  px-4  tracking-widest transition duration-200"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >Server Site</a>}
                                </div>
                                <button onClick={() => setShowModal(true)} class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200"
                                    
                                >MORE</button>
                            </div>
                        </div>

                        {showModal ? (
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
                <div className="relative p-6 flex-auto text-green-900">
                { features&&  <ul className="mt-4 text-blueGray-500 text-lg leading-relaxed">
                {/* { features.one ?  <li>{features.one}</li>: null}
                         {features.two && <li>{features.two}</li>}
                         {features.three && <li>{features.three}</li>} */}
                         {
                             features.map((feature,index)=> <li key={index} >{feature}</li>)
                         }
                         
                          
                  </ul>}
                </div>
                <div className="relative p-6 flex-auto text-green-900">
                  <h4 className="text-2xl">Tech Used</h4>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                {techUsed1&&  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          {techUsed1.map((tech,index)=><li key={
                              index
                          } >{tech}</li>)
                           }
                  </ul>}
                 {techUsed2&&  <ul className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {techUsed2.map((tech,index)=><li key={
                              index
                          }>{tech}</li>)
                           }
                          
                          
                  </ul>}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
    </>
)
}

export default AllProjects;