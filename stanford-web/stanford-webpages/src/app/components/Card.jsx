import React from 'react'
import Image from 'next/image'
import {img} from '../../../public/images/img1.png'

const Card = ({name, imgpath, linkedin, github}) => {
  return (
    <div>
      <Image src={img} alt='profile image'/>
      <h1>Name 1</h1>
      <h2>CB.EN.U4AIE22126</h2>
    </div>
  )
}

export default Card
