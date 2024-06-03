import React from 'react'
import githublogo from './images/github.png'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#191d1e] text-white text-center p-5 mt-10'>
      
      
      <Link href="https://github.com/BURUGURAHUL/Stanford-Robotic-Arm" target='_blank'>
      <div className='flex gap-3 text-white rounded-lg justify-center items-center px-3 py-2 mb-2 mt-5 transition ease-in-out delay-150 bg-[#263238] hover:-translate-y-1 hover:scale-110 hover:bg-[#48C063] duration-300 w-fit mx-auto'>
        <Image src={githublogo} width={30}/>
        View on Github
        </div>
      </Link>

      Made with ❤️ by Group B2!
    </div>
  )
}

export default Footer
