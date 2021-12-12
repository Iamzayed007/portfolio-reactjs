import React from 'react';
import {SkillsData} from './SkillsData'
const Skills = () => { 
 
    return (
        <div id="skills" className="relative lg:text-white top-44 max-w-full " >
            {/* <h1 className="text-6xl text-center">Skills</h1> */}
            {/* <img style={imgStyle} src={img} alt="" /> */}
 
      {/* Frontend */}

            <div class=" py-14 "
            data-aos="fade-right"
            data-aos-duration="2000"
            >
    <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Skills</h1>
    <h3 class="text-2xl tracking-widest mt-10 text-purple-900  text-center ">Front End</h3>

   
    <div class="md:flex md:justify-center md:space-x-4 md:px-2  ">

     
      <div className="lg:grid lg:grid-cols-5 lg:gap-4 ">   
     {
         SkillsData.frontend.map((skill,index)=> <SingleSkill
         key={index}
         skill={skill}
         ></SingleSkill>)
     }  
    </div>

    
    </div>
  </div>
<div className="lg:grid lg:grid-cols-2 lg:gap-2">
  
{/* Backend */}

          <div class=" py-10"
          data-aos="fade-right"
          data-aos-duration="2000"
          >
              <h3 class="text-2xl tracking-widest text-center text-purple-900 ">Back End</h3>

            
              <div class="md:flex md:justify-center md:space-x-8 md:px-14">

              
                <div className="lg:grid lg:grid-cols-4 lg:gap-4">   
              {
                  SkillsData.backend.map((skill,index)=> <SingleSkill
                  key={index}
                  skill={skill}
                  ></SingleSkill>)
              }  
              </div>

              
              </div>
            </div>
  {/* hostingPlatforms */}
                        <div class=" py-10"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        >
                <h3 class="text-2xl tracking-widest  text-center text-purple-900">Hosting Flatform</h3>

                <div class="md:flex md:justify-center md:space-x-1 md:px-1">

                  <div className="lg:grid lg:grid-cols-4 lg:gap-4"
                  
                  >   
                {
                    SkillsData.hostingPlatforms.map((skill,index)=> <SingleSkill
                    key={index}
                    skill={skill}
                    ></SingleSkill>)
                }  
                </div>

                
                </div>
              </div>
</div>

<div className="lg:grid lg:grid-cols-3 lg:gap-1">   


  {/* programmingLanguages */}
                  <div class=" py-10"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  >
          <h3 class="text-2xl tracking-widest  text-center text-purple-900">Programming Language</h3>

      
          <div class="md:flex md:justify-center md:space-x-8 md:px-14">

            
            <div className="lg:grid lg:grid-cols-2 lg:gap-4">   
          {
              SkillsData.programmingLanguages.map((skill,index)=> <SingleSkill
              key={index}
              skill={skill}
              ></SingleSkill>)
          }  
          </div>

          
          </div>
        </div>

  {/* databases */}
                      <div class=" py-10"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      >
              <h3 class="text-2xl tracking-widest  text-center text-purple-900">Database</h3>


              <div class="md:flex md:justify-center md:space-x-8 md:px-14">

                
                <div className="lg:grid lg:grid-cols-2 lg:gap-4">   
              {
                  SkillsData.databases.map((skill,index)=> <SingleSkill
                  key={index}
                  skill={skill}
                  ></SingleSkill>)
              }  
              </div>

              
              </div>
            </div>
  {/* versionControl */}
            <div class=" py-10"
            data-aos="fade-right"
            data-aos-duration="2000"
            >
    <h3 class="text-2xl tracking-widest text-center text-purple-900">Version Control</h3>

  
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      <div className="lg:grid lg:grid-cols-1 lg:gap-4">   
     {
         SkillsData.versionControl.map((skill,index)=> <SingleSkill
         key={index}
         skill={skill}
         ></SingleSkill>)
     }  
    </div>

    
    </div>
  </div>
  </div>   

        </div>
    );
};

const SingleSkill=(props)=>{
const {skillName,imgSrc}=props.skill
    return(
        <div>

<div class=" mt-16 py-2 px-4  w-36 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm "
     
        >
          <img class="w-36 h-32" src={imgSrc} alt="" 
             data-aos="zoom-in"
             data-aos-duration="2000"
          />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl  font-bold"
             data-aos="zoom-out"
             data-aos-duration="2000"
            >{skillName}</h1>
          </div>
        </div>
      </div>
      {/* "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" */}
        </div>
    )
}

export default Skills;