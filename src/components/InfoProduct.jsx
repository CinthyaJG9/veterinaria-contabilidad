import React, { useState } from 'react';
// import { TbTriangleInvertedFilled } from "react-icons/tb";

const InfoProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-5'>
      <div
        className={`grid ${isOpen} w-full place-items-center gap-5 rounded-lg border border-black px-5 py-1`}
        onClick={handleOpen}
      >
        <div className='flex w-full justify-between'>
          <h2>Producto 1</h2>
          {/* <TbTriangleInvertedFilled /> */}
          <p>i</p>
        </div>
        {isOpen && (
          <div className='grid  w-full place-items-center'>
            <div className='flex w-full gap-5'>
              <p className='w-1/5'>Nombre:</p>
              <p>Producto 1</p>
            </div>
            <div className='flex w-full gap-5'>
              <p className='w-1/5'>Marca:</p>
              <p>Producto 1</p>
            </div>
            <div className='flex w-full gap-5'>
              <p className='w-1/5'> Precio:</p>
              <p>Producto 1</p>
            </div>
            <div className='flex w-full gap-5'>
              <p className='w-1/5'>Cantidad:</p>
              <p>Producto 1</p>
            </div>
          </div>
        )}
      </div>

      <div className='items-center'>
        <button className='rounded-2xl bg-[#6ED4A5] p-3 px-4 font-medium'>
          Realizar Compra
        </button>
      </div>

    </div>
  );
};

export default InfoProduct;
