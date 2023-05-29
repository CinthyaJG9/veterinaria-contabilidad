import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { apiVet } from '../services/api/instaceApi';
import { useProduct } from '../hooks/useSWR';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const navigate = useNavigate();


  const { data: dataProduct, error, isLoading } = useProduct();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los productos</div>;


  const onSubmit = async (event) => {

    const data = {
      id_pro: event.codigo_pro,
      nombre_pro: event.nombre_pro,
      // stockId_pro:event.stock_pro,
      precioVenta_pro: event.precio_pro,
      estado_pro: event.estado_pro == 'true' ? 1 : 0,
      id_cat: event.id_cat,
      id_mar: event.id_mar,
      id_anipro: event.id_animal,
      id_vet: 1
    };

    await apiVet.post('/maestra/productoM', data)
      .then(() => {
        alert('Producto Agregado');
      })
      .catch(() => {
        alert('Error al agregar el producto');
      });

    navigate('/Inventario');
  };

  return (
    <div className='z-0 flex h-screen w-full flex-col items-center justify-center gap-5 mt-30'>
      <form
        className='flex flex-col items-center justify-center gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <table className='table-auto border-separate border border-green '>
          <tbody>
            <tr>
              <th>
                <h1 className='font-Inter p-3 text-2xl font-bold'>
                  Agregar Productos:
                </h1>
              </th>
            </tr>
            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl'>
                  {' '}
                  Nombre del Producto:{' '}
                </p>
              </th>
              <th>
                <input
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Nombre del Producto'
                  name='productName'
                  type='text'
                  {...register('nombre_pro', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                />
                {errors.nombre_pro?.type === 'pattern' && (
                  <p>Solo se aceptan letras</p>
                )}
              </th>
            </tr>

            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl'>
                  {' '}
                  Codigo del Producto:{' '}
                </p>
              </th>
              <th>
                <input
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Codigo del Producto'
                  name='productCode'
                  type='text'
                  {...register('codigo_pro', {
                    required: true,
                    pattern: /^[0-9]+$/i
                  })}
                />
                {errors.codigo_pro?.type === 'pattern' && (
                  <p>Solo se aceptan numeros</p>
                )}
              </th>
            </tr>
            {/* Checar esto, los catalogos para mostrarlos en los selects y asignarselo al producto a registrar */}
            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl	'>
                  {' '}
                  Marca del Producto:{' '}
                </p>
              </th>
              <th>
                <select
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  defaultValue='1'
                  name='productBrand'
                  {...register('id_mar', { required: true })}
                >


                  {dataProduct.marcas.marca.map((marca) => {
                    return (
                      <option key={marca.id_mar} value={marca.id_mar}>
                        {marca.nombre_mar}
                      </option>
                    );
                  })}
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl	'>
                  {' '}
                  Categoria del Producto:{' '}
                </p>
              </th>
              <th>
                <select
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  defaultValue='1'
                  name='productCategory'
                  {...register('id_cat', { required: true })}
                >
                  {dataProduct.categorias.categoria.map((categoria) => {
                    return (
                      <option key={categoria.id_cat} value={categoria.id_cat}>
                        {categoria.nombre_cat}
                      </option>
                    );
                  })}
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl'> Animal: </p>
              </th>
              <th>
                <select
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  defaultValue='1'
                  name='animal'
                  {...register('id_animal', { required: true })}
                >
                  {
                    dataProduct.animales.animalProducto.map((animal) => {
                      return (
                        <option key={animal.id_anipro} value={animal.id_anipro}>
                          {animal.nombre_anipro}
                        </option>
                      );
                    }
                    )
                  }
                </select>
              </th>
            </tr>
            {/* Hasta acá */}
            <tr></tr>
            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl'>
                  {' '}
                  Precio del Producto:{' '}
                </p>
              </th>
              <th>
                <input
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  placeholder='Precio del Producto'
                  type='text'
                  name='productPrice'
                  {...register('precio_pro', {
                    required: true,
                    pattern: /^[0-9]+$/i
                  })}
                />
                {errors.precio_pro?.type === 'pattern' && (
                  <p>Solo se aceptan numeros</p>
                )}
              </th>
            </tr>
            <tr>
              <th>
                <p className='font-Inter p-3 text-left text-xl	'> Estado: </p>
              </th>
              <th>
                <select
                  className='w-11/12 rounded-md border border-slate-300 py-2 pl-9 pr-9 text-center shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
                  defaultValue='1'
                  name='productState'
                  {...register('estado_pro', { required: true })}
                >
                  <option value='true'>Disponible</option>
                  <option value='false'>No Disponible</option>
                </select>
              </th>
            </tr>
            <tr>
              <th className='p-2'>
                <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                  <button
                    className='p-2'
                    type='submit'
                    onClick={(returnBtn) =>
                      // location.replace('http://localhost:5173/Inventario')
                      navigate('/Inventario')
                    }
                  >
                    <p className='p-1 text-center'> + Agregar Producto </p>
                  </button>
                </div>
              </th>
              <th className='p-2'>
                <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                  <button
                    className='p-2'
                    onClick={(returnBtn) =>
                      navigate()
                    }
                  >
                    <p className='p-1 text-center'> Cancelar </p>
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddProduct;
