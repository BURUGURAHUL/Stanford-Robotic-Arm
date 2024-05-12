import React from 'react'
import Link from 'next/link'

const Button = ({text, link}) => {
  return (
    <div className='text-white rounded-lg text-lg px-3 py-2 transition ease-in-out delay-150 bg-[#263238] hover:-translate-y-1 hover:scale-110 hover:bg-[#48C063] duration-300' >
      <Link href={link}>
      {text}
    </Link>
    </div>
  )
}

export default Button
