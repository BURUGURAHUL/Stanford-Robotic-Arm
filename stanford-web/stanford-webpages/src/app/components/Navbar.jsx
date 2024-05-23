import React from 'react';
import Logo from './Logo';
import Button from './Button';
import Image from 'next/image';
import img1 from "../../../public/images/img1.png";

const Navbar = () => {
  const buttons = [
    { text: 'Aim', link: '/' },
    { text: 'Theory', link: '/theory' },
    { text: 'Robotics Toolbox', link: '/rbtoolbox' },
    { text: 'Genetic Algorithm', link: '/geneticalgo' },
    { text: 'Simulation', link: '/simulator' },
    { text: 'Test', link: '/test' },
    { text: 'Contributors', link: '/contributors' },
    { text: 'References', link: '/references' },
  ];

  return (
    <div className='flex items-center m-5 justify-between gap-10 mt-3'>
      <div>
        <Logo />
      </div>

      <div className='flex flex-col justify-center mx-5'>
        <div className="flex justify-center flex-wrap gap-2">
          {buttons.slice(0, 4).map((button, index) => (
            <div key={index}><Button text={button.text} link={button.link} /></div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap mt-1 gap-2">
          {buttons.slice(4, 8).map((button, index) => (
            <div key={index}><Button text={button.text} link={button.link} /></div>
          ))}
        </div>
      </div>

      <div>
        <Image className='' src={img1} width={190} height={190} />
      </div>
    </div>
  );
};

export default Navbar;
