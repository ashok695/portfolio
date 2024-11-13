import React from 'react'

const Contact = () => {
  const contactItems = [
    // {
    //   social: 'website',
    //   link: 'ashok.com',
    //   href: '',
    // },
    {
      social: 'email',
      link: 'ashokjoe2001@gmail.com',
      href: 'mailto:ashokjoe2001@gmail.com',
    },
    {
      social: 'github',
      link: '@ashok695',
      href: 'https://github.com/ashok695',
    },
    {
      social: 'instagram',
      link: '@ash0kx',
      href: 'https://www.instagram.com/ash0kx',
    },
    {
      social: 'twitter',
      link: '@ashok',
      href: 'https://twitter.com/dev_ashokk',
    },
  ]
  return (
    <div className='font-poppins text-white overflow-hidden px-5 h-[400px]'>
      <h1 className='text-lg py-3'>Reach out via Socials</h1>
        <p style={{ color: '#ad7e61' }} className='pb-2'>.socials <span className='text-white'> {' {'}</span></p>
       {
        contactItems.map(detail=>(
          <div className='flex gap-2 pl-7 pt-1 text-lg'>
            <h1 >{`${detail.social}  :`}</h1>
            <a href={detail.href} target="_blank" rel="noopener" style={{ color: '#ad7e61' }}>
            {`${detail.link}; `}
            </a>
          </div>
        ))
       }
       <p className='pt-2'>{'}'}</p>
    </div>
  )
}

export default Contact