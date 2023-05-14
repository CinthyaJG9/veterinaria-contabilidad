import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Supplier = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        /**
         * {
          headers:{
            "x-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
          },
          nombre_ser:e.target.serviceName.value,
          descripcion_ser:e.target.serviceDesc.value
        }
         */
        try {
          const response = await axios.post("https://veterinariamap6iv6-production.up.railway.app/api/v1/catalogo/proveedorC", {
            nombre_prov: e.target.provName.value,
            tel_prov: e.target.provTel.value
          }, {
            headers: {
              "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
            }
          });
          toast.success(`Proveedor registrado con éxito.`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } catch (error) {
          toast.error(`Ups! Hubo un error, ${error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
    
    
    
      }
    return (
        <div className='MuiBox-root css-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-5'>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <form method='GET' onSubmit={handleSubmit}>
            <table className=' table-auto border-separate border border-[#6ED4A5] '>
              <tr>
                <th>
                  <h1 className='font-Inter p-8 text-2xl font-bold '>
                    Registrar proveedor
                  </h1>
                </th>
              </tr>
              <tr>
                <th>
                  <p className='font-Inter p-8 text-left text-xl'>
                    Nombre del proveedor:{' '}
                  </p>
                </th>
                <th>
                  <input
                    className='border-slate-300 focus:border-sky-500 focus:ring-sky-500 w-11/12 rounded-md border py-2 pl-9 pr-9 text-center shadow-sm focus:outline-none focus:ring-1 sm:text-sm'
                    placeholder='Nombre del Servicio'
                    name="provName"
                    type='text'
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <p className='font-Inter p-8 text-left text-xl'>
                    Telefono del proveedor:{' '}
                  </p>
                </th>
                <th>
                  <input
                    className='border-slate-300 focus:border-sky-500 focus:ring-sky-500 w-11/12 rounded-md border py-2 pl-9 pr-9 text-center shadow-sm focus:outline-none focus:ring-1 sm:text-sm'
                    placeholder='Descripcion del Servicio'
                    name="provTel"
                    type='text'
                    maxLength={10}
                  />
                </th>
              </tr>
              <tr>
                <th className='p-2'>
                  <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                    <button className='p-2' type="submit" onClick={redireccion => { window.location.href = "/Inventario" }}>
                      <p className='p-1 text-center'> + Agregar Proveedor </p>
                    </button>
                  </div>
                </th>
                <th className='p-2'>
                  <div className='w-2/3 rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
                    <button className='p-2' onClick={redireccion => { window.location.href = "/Inventario" }}>
                      <p className='p-1 text-center'> Cancelar registro </p>
                    </button>
                  </div>
                </th>
              </tr>
            </table>
          </form>
        </div>
      );
    };

export default Supplier;