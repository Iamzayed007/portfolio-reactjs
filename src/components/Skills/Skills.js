import React,{useState,useEffect} from 'react';
import img from '../image/photo-1520916784675-1b97f1fc1c05.jpeg'

const Skills = () => {
    const [skills,setSkills]=useState([])
    useEffect(()=>{
        fetch('./skills.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])
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
    {/* <h3 class="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3> */}
    <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Skills</h1>

    {/* <!-- Box --> */}
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      {/* <!-- box-1 --> */}
      <div className="grid grid-cols-4 gap-4">

      
     {
         skills.map(skill=> <SingleSkill
         key={skill.id}
         skill={skill}
         ></SingleSkill>)
     }
     
 
   
    

     
    </div>
    </div>
  </div>
        </div>
    );
};

const SingleSkill=(props)=>{
const {name,img}=props.skill
    return(
        <div>

<div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">{name}</h1>
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default Skills;