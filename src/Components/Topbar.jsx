import React from 'react'
import vsicon from "../assets/vscode_icon.svg"
const Topbar = () => {
  return (
    <div className='text-white font-poppins flex p-3 justify-between'>
      <div className=''>
        <ul className='flex gap-3 text-sm font-extralight'>
          <li className='w-[20px] h-[20px]'><img src={vsicon} /></li>
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </div>
      <div>
        <p className='text-sm font-extralight'>Ashok - Visual Studio Code</p>
        {/* <input className='bg-stone-800 w-[450px] rounded-md border-[1px] border-stone-700 pl-2' placeholder="Intern Period"/> */}
      </div>
      <div className="flex">
        <span className="w-3 h-3 rounded-full cursor-pointer bg-yellow-300 mr-2"></span>
        <span className="w-3 h-3 rounded-full cursor-pointer bg-green-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full cursor-pointer bg-red-500"></span>
      </div>

    </div>
  )
}

export default Topbar