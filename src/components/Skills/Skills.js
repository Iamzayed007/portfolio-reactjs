import React from 'react';
import {SkillsData} from './SkillsData'
import ImageContainer from '../ui/ImageContainer/ImageContainer';
import Box from '../ui/Box/Box';
import mypic from '../../assets/image/MyImage.png'
const Skills = () => { 
 
    return (
      <div className='container mx-auto fontPlaywrite'>
      <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-gray-300 w-50">
              <div className="md:ml-8 mt-5 py-5">

                <div className=''>
                 <p className='text-2xl font-semibold'>.language<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.programmingLanguages.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='mt-8'>
                 <p className='text-2xl font-semibold'>.frontend<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.frontend.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='mt-8'>
                 <p className='text-2xl font-semibold'>.backend<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.backend.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='mt-8'>
                 <p className='text-2xl font-semibold'>.databases<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.databases.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='mt-8'>
                 <p className='text-2xl font-semibold'>.mobile<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.mobile.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='mt-8'>
                 <p className='text-2xl font-semibold'>.versionControl<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.versionControl.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='mt-8'>
                 <p className='text-2xl font-semibold'>.hosting<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.hostingPlatforms.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
              </div>
                <div className='my-8'>
                 <p className='text-2xl font-semibold'>.misc<br /></p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                   {SkillsData && SkillsData.misc.map(dt=>(<>

                    <Skill skill={dt}/>
                   </>))}
                    </div>
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

const Skill=(props)=>{
const {skillName,imgSrc}=props.skill
    return(
        <div className='mt-3'>
         <Box className='w-32 h-10 inline-block align-middle text-center text-gray-400'>
          <span className='ml-3'>{skillName}</span>
         </Box>
        </div>
    )
}

export default Skills;