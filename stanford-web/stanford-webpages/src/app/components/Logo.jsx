import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/robotics_logo.png'

const Logo = () => {
  return (
    <div className='flex'>
      <Image
            src={logo}
            width={45}
            height={45}
            alt="Logo"
        />
        <div><div className='font-bold text-3xl leading-6 ml-2 low-highlight'>
          Stanford
        </div>

        <div className='font-bold text-3xl leading-6 ml-2 low-highlight'>
          Manipulator
        </div></div>
        
    </div>
  )
}

export default Logo
