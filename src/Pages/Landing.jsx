import React from 'react';
import ashok from "../assets/champ.jpg";
import bg from "../assets/bg.png"
import resumepdf from "../assets/Resume.pdf";

const Landing = () => {
  function resumeDownload(){
    window.open(resumepdf, '_blank');
  }
  
  return (
    <>
      <div className='relative font-poppins text-white bg-zinc-800  overflow-hidden h-[650px] '>  
      <img src={bg} className="absolute top-0 left-0 w-[550px] h-[550px] object-cover z-0 opacity-15" alt="Background" />
        <div className='flex justify-evenly pt-10 items-center relative z-10'>
          <div className='flex flex-col'>
            <h1 className='text-9xl font-bold text-blue-600'>Ashok Muthupandi's</h1>
            <span className='text-2xl'>Internship Details</span>
            <button className='w-[150px] h-[50px] border rounded-lg pl-15 mt-2' onClick={resumeDownload}>
              View Resume
            </button>
          </div> 
          <img src={ashok} className='w-[350px] h-[450px]' alt="Ashok"/> 
        </div>
      </div>
    </>
  );
}

export default Landing;
