import React, { useState } from 'react';
// Icons
// import {
// RiHome3Line,
// RiFileCopyLine,
// RiWalletLine,
// RiPieChartLine,
// RiMore2Fill,
// RiCloseFill,
// } from "react-icons/ri";

import InfoProduct from './InfoProduct';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-primary-900 z- fixed h-full w-[80%] transition-all duration-300 md:w-[40%] lg:static lg:w-full ${
          showMenu ? 'left-0' : '-left-full'
        }`}
      >
        <div className='flex h-[30vh] flex-col items-center justify-center gap-2 p-8'>
          <h1 className='text-2xl font-bold text-black'>Ticket</h1>
        </div>

        <div className='bg-primary-300 flex h-[70vh] flex-col justify-between gap-8 overflow-y-scroll rounded-tr-[100px] p-8'>
          <div className='bg-primary-900/50 rounded-xl p-4 text-black'>
            <InfoProduct />
          </div>

          <div>
            <table className='border-collapse '>
              <tbody>
                <tr>
                  <tr>
                    {' '}
                    <h3 className='px-4 py-6'>Subtotal:</h3>{' '}
                  </tr>
                  <td className='px-4 py-6'> $$$ </td>
                </tr>
                <tr>
                  <td className='px-4 py-6'>Total:</td>
                  <td className='px-4 py-6'> $$$ </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='pt-8'>
            <button className='rounded-2xl bg-[#6ED4A5] p-3 px-4 font-medium'>
              {' '}
              Realizar Compra{' '}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
