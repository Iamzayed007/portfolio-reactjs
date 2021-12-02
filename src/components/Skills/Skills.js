import React,{useState,useEffect} from 'react';
import img from '../image/photo-1520916784675-1b97f1fc1c05.jpeg'
import {SkillsData} from './SkillsData'
const Skills = () => { 
    // const [skills,setSkills]=useState([])
    // useEffect(()=>{
    //     fetch('./skills.json')
    //     .then(res=>res.json())
    //     .then(data=>setSkills(data))
    // },[])
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
        <div id="skills" className="relative lg:text-white top-44" >
            {/* <h1 className="text-6xl text-center">Skills</h1> */}
            {/* <img style={imgStyle} src={img} alt="" /> */}


            <div class="bg-green-100 py-14">
    <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Skills</h1>
    <h3 class="text-2xl tracking-widest mt-10 text-purple-900  text-center ">Front End</h3>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-4">   
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

<div class="bg-green-100 py-10">
    <h3 class="text-2xl tracking-widest text-green-600 text-center text-purple-900 ">Back End</h3>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
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
            <div class="bg-green-100 py-10">
    <h3 class="text-2xl tracking-widest text-green-600 text-center text-purple-900">Hosting Flatform</h3>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-4">   
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
            <div class="bg-green-100 py-10">
    <h3 class="text-2xl tracking-widest text-green-600 text-center text-purple-900">Programming Language</h3>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
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
            <div class="bg-green-100 py-10">
    <h3 class="text-2xl tracking-widest text-green-600 text-center text-purple-900">Database</h3>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
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
            <div class="bg-green-100 py-10">
    <h3 class="text-2xl tracking-widest text-green-600 text-center text-purple-900">Version Control</h3>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
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

<div class="mt-16 py-2 px-4 bg-whit w-36 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm ">
          <img class="w-36 h-32" src={imgSrc} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl  font-bold">{skillName}</h1>
          </div>
        </div>
      </div>
      {/* "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" */}
        </div>
    )
}

export default Skills;