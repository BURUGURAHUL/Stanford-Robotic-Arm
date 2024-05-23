"use client";
import * as React from 'react';
import Logo from './Logo';
import NavButton from './Button';
import Image from 'next/image';
import img1 from "../../../public/images/img1.png";
import MobileMenuButton from './MenuButton';
import MobileDrawer from './MenuDrawer';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
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
    <div className='flex items-center m-5 md:justify-between sm:justify-evenly gap-10'>
      <div>
        <Logo />
      </div>
      <div className='flex-col justify-center mx-5 hidden md:flex md:visible'>
        <div className=" justify-center flex-wrap gap-2 hidden md:flex md:visible">
          {buttons.slice(0, 4).map((button, index) => (
            <div key={index}><NavButton text={button.text} link={button.link} /></div>
          ))}
        </div>
        <div className="justify-center flex-wrap mt-1 gap-2 hidden md:flex md:visible">
          {buttons.slice(4, 8).map((button, index) => (
            <div key={index}><NavButton text={button.text} link={button.link} /></div>
          ))}
        </div>
      </div>

      <div className='visible sm:visible sm:block md:hidden'>
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>

      <div>
        <Image className='hidden lg:block lg:visible' src={img1} width={190} height={190} />
      </div>
    </div>
  );
};

export default Navbar;
