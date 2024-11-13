import React from 'react'
import aws from "../assets/Bottombar/aws.svg";
import bell from "../assets/Bottombar/bell.svg"
import error from "../assets/Bottombar/error.svg"
import git from "../assets/Bottombar/git.svg"
import prettier from "../assets/Bottombar/prettier.svg"
import warning1 from "../assets/Bottombar/warning1.svg"
const Bottombar = () => {
  return (
    <div className='text-white  h-[30px] bg-black font-poppins text-sm font-extralight pt-1'>
      <div className='flex justify-between px-3'>
        <div className='flex gap-x-2 items-center'>
          <div className='flex items-center'>
            <img src={git} className='w-[20px] h-[20px] pt-1'/>
            <span className=''>main</span>
          </div>
          <div className='flex gap-x-1 items-center'>
            <img src={error} className='w-[17px] h-[17px]'/>
            <img src={warning1} className='w-[17px] h-[17px]'/>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <div className='flex gap-x-1'>
            <img src={aws} className='w-[20px] h-[20px]'/>
            <span>hosted on AWS S3</span>
          </div>
          <div className='flex gap-x-1'>
            <img src={prettier} className='w-[17px] h-[17px]'/>
            <span>Prettier</span>
          </div>
          <div>
            <img src={bell} className='w-[17px] h-[17px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottombar