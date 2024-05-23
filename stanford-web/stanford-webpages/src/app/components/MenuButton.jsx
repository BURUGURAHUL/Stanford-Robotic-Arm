import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MobileMenuButton({ onClick }) {
  return (
    <button className="p-2 right-[8%] top-5 absolute" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl" icon={faBars} color='#48C063' />
    </button>
  );
}

export default MobileMenuButton