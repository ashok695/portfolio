import React from 'react'

const About = () => {
    const details=[
        {
            name:"Ashok",
            age:"22",
            location:"Kovilpatti, Tirunelveli, India",
            degree: "B.E in Mechnaical Engineering",
            hobbies:[
                "Cricket","Finance","Technology"
            ],
            interests:[
                "Devops","development"    
            ]
        }
    ]
  return (
    <div className='text-white font-poppins text-base pt-3 h-[400px] overflow-y-hidden px-5 overflow-x-hidden'>
        <div>
            <h1 className='text-lg'>Let me Introduce Myself</h1>
        </div>
        <div>
            {
                details.map(x=>(
                    <div className='p-4'>
                       <p className="text-yellow-400">{'{'}</p>
                       <div className='pl-5 py-2'>
                        <h2 style={{ color: '#5ab7f0' }}>"name"<span className='text-white px-2'>:</span> <span style={{ color: '#ad7e61' }}>"{x.name}"</span></h2>
                        <h2 style={{ color: '#5ab7f0' }}>"age"<span className='text-white px-2'>:</span><span style={{ color: '#ad7e61' }}>"{x.age}"</span></h2>
                        <h2 style={{ color: '#5ab7f0' }}>"location"<span className='text-white px-2'>:</span><span style={{ color: '#ad7e61' }}>"{ x.location}"</span></h2>
                        <h2 style={{ color: '#5ab7f0' }}>"degree"<span className='text-white px-2'>:</span><span style={{ color: '#ad7e61' }}>"{x.degree}"</span></h2>
                        <h2 style={{ color: '#5ab7f0' }}>"hobbies"<span className='text-white px-2'>:</span> <span style={{ color: '#ad7e61' }}>"{x.hobbies.join('","')}"</span></h2>
                        <h2 style={{ color: '#5ab7f0' }}>"interests"<span className='text-white px-2'>:</span><span style={{ color: '#ad7e61' }}>"{x.interests.join('","')}"</span></h2>
                        </div>
                        <p className="text-yellow-400">{'}'}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default About