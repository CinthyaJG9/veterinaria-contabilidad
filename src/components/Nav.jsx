import { Link } from 'react-router-dom';
import Drawer from './Drawer';

const Nav = ({ children }) => {
  return (
    <>
      <nav className='fixed w-full bg-green-10'>
        <div className='mx-auto flex flex-wrap items-center justify-between p-4'>
          <Link to='/Libro' className='flex items-center text-white text-3xl font-light'>
            <span className='self-center whitespace-nowrap font-bold'>
              GOP
            </span>
            Kawaii
          </Link>
        </div>
      </nav>
      <main>
        <div className='flex'>
          <Drawer />
          {children}
        </div>
      </main>
    </>
  );
};

export default Nav;
