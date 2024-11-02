import React from 'react'
import Typewriter from 'typewriter-effect';

const TypeWriter=()=>{
    return(
        <Typewriter
  options={{
    strings: ['Software Engineer','Web Developer', 'Frontend Developer','MERN Developer'],
    autoStart: true,
    loop: true,
  }}
/>
    )
}
export default TypeWriter