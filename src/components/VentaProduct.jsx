import React from 'react';
import { useForm } from 'react-hook-form'


function VentaProduct() {

  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = async (event) => {
    const newData = {
      codigo_barras: event.codigo_barras,
      cantidad_pro: event.cantidad_pro
    };
  }

  return (
    <div className='grid h-full w-full place-items-center  '>
      <div className='rounded-3xl border-4 border-dashed border-[#6ED4A5] p-10'>
        <h1 className='pb-16 text-center text-4xl font-bold'>
          Venta de Productos
        </h1>

        <form action=''
         className='grid grid-cols-2'
         onSubmit={handleSubmit(onSubmit)}

         >
          <div className='p-2'>
            <h3>Codigo de Barras: </h3>
          </div>
          <div className='p-2'>
            <input
              type='text'
              className='rounded-lg border-2 border-[#44403c]'
              {...register('codigo_barras', { required: true, pattern: /^[0-9]+$/i })}
            />
            {errors.codigo_barras?.type === 'pattern' && <p>Solo se aceptan numeros</p>} 
          </div>

          <div className='p-2'>
            <h3>Nombre del Producto: </h3>
          </div>
          <div className='p-2'>
            <label htmlFor='' className='rounded-lg px-9 text-[#9ca3af]'>
              Nombre del Producto
            </label>
          </div>

          <div className='p-2'>
            <h3>Precio del Producto: </h3>
          </div>
          <div className='p-2'>
            <label htmlFor='' className='rounded-lg px-9 text-[#9ca3af]'>
              Precio del Producto
            </label>
          </div>

          <div className='p-2'>
            <h3>Cantidad: </h3>
          </div>
          <div className='p-2'>
            <select
              placeholder='CANTIDAD'
              className='w-full appearance-none rounded-lg border-2 border-[#44403c] text-[#9ca3af]'
              {...register('cantidad_pro')}
            >
              <option className='text-center'> Cantidad de Productos </option>
            </select>
          </div>

          <div className='p-2'>
            <h3>Subtotal: </h3>
          </div>
          <div className='p-2'>
            <label htmlFor='' className='rounded-lg px-6 text-[#9ca3af]'>
              Subtotal
            </label>
          </div>

          <div className='p-2'>
            <h3>IVA: </h3>
          </div>
          <div className='p-2'>
            <label htmlFor='' className='rounded-lg px-11 text-[#9ca3af]'>
              IVA
            </label>
          </div>

          <div className='p-2'>
            <h3>Total: </h3>
          </div>
          <div className='p-2'>
            <label htmlFor='' className='rounded-lg px-10 text-[#9ca3af]'>
              Total
            </label>
          </div>

          <div className='pt-8'>
            <button className='rounded-2xl bg-[#6ED4A5] p-3 px-4 font-medium'>
              Agregar Producto
            </button>
          </div>

          <div className='items-center pt-8'>
            <button className='rounded-2xl bg-[#6ED4A5] p-3 px-4 font-medium'>
              Cancelar Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VentaProduct;
