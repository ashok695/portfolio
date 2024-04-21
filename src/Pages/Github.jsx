import React from 'react'
import github from "../assets/github.svg"
import contribution from "../assets/github.png"
const Github = () => {
  return (
    <div className='text-white bg-zinc-800  overflow-hidden font-poppins pl-5 pt-5 h-[650px]'>
      <div className='flex gap-2 justify-center'>
        <div className='bg-slate-600 flex p-3 rounded-lg gap-2'>
        <h1>Ashok</h1>
        <span>|</span>
        </div>
      </div>
      <div className='flex gap-x-3 justify-center'>
      <div className='w-[300px] h-[180px] border mt-10 p-3'>
        <h1 className='text-blue-600 font-semibold'>Kebs-Clone </h1>
        <p>Kebs- Business Management Software - in this repo coded that specefic Timesheet part</p>
        <a href="https://github.com/ashokmuthupandi/KEBS-Clone-" target="_blank" rel="noopener" style={{ color: '#ad7e61' }}>
            <img src={github} className='w-[35px] h-[35px] text-right'/>
            </a>
      </div>
      <div className='w-[300px] h-[180px] border mt-10 p-3'>
        <h1 className='text-blue-600 font-semibold'>CI/CD Pipeline </h1>
        <p>Github workflow- in this repo will learn about the ci/cd pipeline using github workflows</p>
        <a href="https://github.com/ashok695/ci-" target="_blank" rel="noopener" style={{ color: '#ad7e61' }}>
            <img src={github} className='w-[35px] h-[35px] text-right'/>
            </a>
      </div>
      <div className='w-[300px] h-[180px] border mt-10 p-3'>
        <h1 className='text-blue-600 font-semibold'>Ktern Frontend codebase </h1>
        <p>Ktern Frontend codebase - Learned about angular ans start contributing to Ktern frontend codebase</p>
        <div className='flex gap-x-2'>
        <a target="_blank" rel="noopener" style={{ color: '#ad7e61' }}>
            <img src={github} className='w-[35px] h-[35px] text-right'/>
            </a>
            <p className='opacity-20  hover:text-white'>Repo is private</p>
        </div>
      </div>
      </div>
      <div className='flex justify-center mt-5'>
        <img src={contribution}/>
      </div>
    </div>
  )
}

export default Github