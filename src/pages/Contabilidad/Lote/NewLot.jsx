import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
const NewLot = () => {
  const formRef = useRef();
  const URL = 'https://veterinariamap6iv6-production.up.railway.app/api/v1';
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [periodos, setPeriodos] = useState([]);
  const onSubmit = async (event) => {
    const data = {
      ...event,
      montoTotal_lot: event.cantidadProducto_lot * event.precioUnitario_lot
    };
    console.log(data);
    try {
      await axios.post(`${URL}/maestra/loteM`, data, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
        }
      });
      toast.success(`Se registro correctamente el lote `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
      formRef.current.reset();
      //window.location.href="/Inventario";
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${URL}/catalogo/proveedorC`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
        }
      });
      setProveedores(data.proveedor);
      const response = await axios.get(`${URL}/detalle/periodoD`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
        }
      });
      setPeriodos(response.data.periodo);
      const responseProducts = await axios.get(`${URL}/maestra/productoM`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
        }
      });
      setProductos(responseProducts.data.producto);
    };
    getData();
  }, []);

  return (
    <div className='grid h-full w-full place-items-center pt-20 '>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='rounded-3xl border-4 border-dashed border-[#6ED4A5] p-10'>
        <h1 className='pb-16 text-center text-4xl font-bold'>Lote</h1>

        <form
          action=''
          className='grid grid-cols-2'
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          <div className='p-2'>
            <h3>Codigo del Proveedor: </h3>
          </div>
          <div className='p-2'>
            <select
              type='text'
              className='max-w-fit rounded-lg border-2 border-[#44403c]'
              {...register('id_prov', { required: true, pattern: /^[0-9]+$/i })}
            >
              {proveedores &&
                proveedores.map((proveedor) => {
                  return (
                    <option key={proveedor.id_prov} value={proveedor.id_prov}>
                      {proveedor.nombre_prov}
                    </option>
                  );
                })}
            </select>
            {errors.codigo_proveedor?.type === 'pattern' && (
              <p>Solo se aceptan numeros</p>
            )}
          </div>

          <div className='p-2'>
            <h3>Codigo del Producto: </h3>
          </div>
          <div className='p-2'>
            <select
              type='text'
              className='rounded-lg border-2 border-[#44403c]'
              {...register('id_pro', { required: true, pattern: /^[0-9]+$/i })}
            >
              {productos &&
                productos.map((producto) => {
                  return (
                    <option key={producto.id_pro} value={producto.id_pro}>
                      {`${producto.id_pro}: ${producto.nombre_pro}`}
                    </option>
                  );
                })}
            </select>
            {errors.codigo_producto?.type === 'pattern' && (
              <p>Solo se aceptan numeros</p>
            )}
          </div>

          <div className='p-2'>
            <h3>Cantidad del Producto: </h3>
          </div>
          <div className='p-2'>
            <input
              type='text'
              className='rounded-lg border-2 border-[#44403c]'
              {...register('cantidadProducto_lot', {
                required: true,
                pattern: /^[0-9]+$/i
              })}
            />
            {errors.codigo_producto?.type === 'pattern' && (
              <p>Solo se aceptan numeros</p>
            )}
          </div>

          <div className='p-2'>
            <h3>Fecha de Entrada: </h3>
          </div>

          <div className='p-2'>
            <input
              type='date'
              {...register('fechaEntrada_lot')}
              className='rounded-lg border-2 border-[#44403c]'
            />
          </div>

          <div className='p-2'>
            <h3>Fecha de Caducidad: </h3>
          </div>
          <div className='p-2'>
            <input
              type='date'
              className='rounded-lg border-2 border-[#44403c]'
              {...register('fechaCaducidad_lot')}
            />
          </div>

          <div className='p-2'>
            <h3>Precio Unitario: </h3>
          </div>
          <div className='p-2'>
            <input
              type='text'
              className='rounded-lg border-2 border-[#44403c]'
              {...register('precioUnitario_lot', {
                required: true,
                pattern: /^[0-9]+$/i
              })}
            />
            {errors.precio_unit?.type === 'pattern' && (
              <p>Solo se aceptan numeros</p>
            )}
          </div>

          {/*<div className='p-2'>
            <h3>Importe Total: </h3>
          </div>
          <div className='p-2'>
            <input
              type='text'
              className='rounded-lg border-2 border-[#44403c]'
              {...register('importe_total', { required: true, pattern: /^[0-9]+$/i })}
            />
            {errors.precio_unit?.type === 'pattern' && <p>Solo se aceptan numeros</p>}
          </div>*/}

          <div className='p-2'>
            <h3>Periodo: </h3>
          </div>

          <div className='p-2'>
            <select
              type='text'
              {...register('id_per', { required: true, pattern: /^[0-9]+$/i })}
              className='rounded-lg border-2 border-[#44403c]'
            >
              {periodos &&
                periodos.map((periodo) => {
                  const fechaIncio = new Date(periodo.fechaInicio_per);
                  const fechaTermino = new Date(periodo.fechaTermino_per);
                  return (
                    <option key={periodo.id_per} value={periodo.id_per}>
                      {`Inicio: ${fechaIncio.getDate()}/${
                        fechaIncio.getMonth() + 1
                      }/${fechaIncio.getFullYear()}, Termino: ${fechaTermino.getDate()}/${
                        fechaTermino.getMonth() + 1
                      }/${fechaTermino.getFullYear()}`}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className='pt-8'>
            <button
              className='rounded-2xl bg-[#6ED4A5] p-3 px-4 font-medium'
              type='submit'
            >
              Registrar Lote
            </button>
          </div>

          <div className='items-center pt-8'>
            <button className='rounded-2xl bg-[#6ED4A5] p-3 px-4 font-medium'>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLot;
