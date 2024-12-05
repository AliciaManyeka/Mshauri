import React from 'react'
import AboutImage from "../../assets/about.jpg"

const About = () => {
  return (
    <div className=' bg-gradient-to-r from-red-900 to-black grid grid-cols-1 sm:grid-cols-2  gap-6 py-11 'id='about'>
      <div className='overflow-hidden flex justify-center items-center '>
        <img  className= ' transform skew-x-12 w-auto h-[50vh] object-cover"'src={AboutImage} alt="" />
      </div>
      <div className='text-white p-8 '>


      <h1> Mshauri</h1>
      <p className='text-white pt-4'>Mshauri is a revolutionary one-stop solution designed to empower small and medium-sized enterprises (SMEs) with the tools they need to efficiently manage and grow their businesses. We understand the unique challenges faced by SMEs, from managing finances and operations to navigating complex regulatory environments. </p>
      <p className='pt-4'>That’s why we’ve created a comprehensive platform that simplifies business management, enabling entrepreneurs and business owners to focus on what truly matters driving success.
   </p>

   <div>
    <button className='mt-6 bg-red-300 p-2 border border-black-2 rounded-md'>Discover More</button>
   </div>
      </div>
    </div>
  )
}

export default About