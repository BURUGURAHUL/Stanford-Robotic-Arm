import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import NavButton from './Button';
function MobileDrawer({ isOpen, onClose }) {
  
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
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-5xl" icon={faXmark} />
        </button>
        <div className="flex flex-col justify-center items-center space-y-4">
        {buttons.map((button, index) => (
            <div key={index}><NavButton text={button.text} link={button.link} /></div>
          ))}
         </div>   
      </div>
    );
  }

export default MobileDrawer;