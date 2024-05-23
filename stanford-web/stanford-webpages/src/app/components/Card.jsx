import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import linkedinlogo from "./images/linkedin.png"
import githublogo from './images/github.png'

const Card = ({name, imgpath, rollno, linkedin, github}) => {
  return (
    <div className='text-center w-full p-5 m-3 rounded-xl leading-6 bg-slate-200'>
      <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
            }}
            className='mx-auto'>
      <Image src={imgpath} alt='' layout={'fill'}
              objectFit="cover" className='p-3 rounded-3xl'/>
      </div>
      <h1 className='m-0  text-[25px]'>{name}</h1>
      <h2 className='text-lg font-normal'>{rollno}</h2>
      <div className='flex gap-4 justify-center mt-3'>
        <Link href={linkedin}>
            <Image src={linkedinlogo} width={40}/>
        </Link>
        <Link href={github}>
            <Image src={githublogo} width={40}/>
        </Link>
      </div>
    </div>
  )
}

export default Card
