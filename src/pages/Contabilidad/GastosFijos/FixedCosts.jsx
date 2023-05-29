import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import FixedModal from '../../../components/fixed/Modal';

const FixedCosts = () => {

  /*const URL = 'https://veterinariamap6iv6-production.up.railway.app/api/v1';
  const formRef = useRef();
  const [Servicios, setServicios] = useState([]);
  const [Descripcion, setDescripcion] = useState('');
  const [serviceChoice, setServiceChoise] = useState();

  useEffect(() => {
    axios
      .get(`${URL}/catalogo/servicioC`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
        }
      })
      .then((res) => {
        console.log(res.data.servicio);
        setServicios(res.data.servicio);
        setDescripcion(res.data.servicio[0].descripcion_ser);
      });
    console.log(new Date().toISOString());
  }, []);
  console.log(serviceChoice);
  const handleChange = (event) => {
    /*console.log(event.target.value);
    console.log(Servicios.find(item=>item.id_ser==event.target.value));
    //1=="1" true
    setDescripcion(
      Servicios.find((item) => item.id_ser == event.target.value)
        .descripcion_ser
    );
    setServiceChoise(
      Servicios.find((item) => item.id_ser == event.target.value).id_ser
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(new Date(e.target.date.value).toISOString());
    const { data } = await axios.get(`${URL}/detalle/periodoD`, {
      headers: {
        'x-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
      }
    });
    //const periodos = data.periodo;
    /*console.log(periodos);
    console.log(new Date(`${e.target.date.value}T00:00:00`));
    const periodoPerteneciente = data.periodo.find(
      (item) =>
        new Date(item.fechaInicio_per) <
          new Date(`${e.target.date.value}T00:00:00`) &&
        new Date(item.fechaTermino_per) >
          new Date(`${e.target.date.value}T00:00:00`)
    );
    if (!periodoPerteneciente) {
      toast.error(
        `Ups! La fecha ingresada no coincide con alguno de los periodos fiscales registrados en el sistema.`,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        }
      );
    } else {
      try {
        await axios.post(
          `${URL}/maestra/gastoFijoM`,
          {
            fecha_gasfij: new Date(e.target.date.value).toISOString(),
            monto_gasfij: e.target.monto.value,
            id_ser: serviceChoice,
            id_per: periodoPerteneciente.id_per
          },
          {
            headers: {
              'x-token':
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
            }
          }
        );

        try {
          toast.success(
            `Actualizando balance del periodo fiscal correspondiente...`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            }
          );
          await axios.put(
            `${URL}/detalle/periodoD/${periodoPerteneciente.id_per}`,
            {
              balance_per:
                periodoPerteneciente.balance_per -
                parseInt(e.target.monto.value)
            },
            {
              headers: {
                'x-token':
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc'
              }
            }
          );
          toast.success(
            `Se registro correctamente el gasto fijo. Actualizado correctamente el balance. `,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            }
          );
          formRef.current.reset();
        } catch (error) {
          toast.error(
            `Ups! Algo salio mal al actualizar el balance fiscal: ${error}`,
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            }
          );
        }
      } catch (error) {
        toast.error(
          `Ups! Algo salio mal al registrar el gasto fijo: ${error}`,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
          }
        );
      }
    }

    /**
     *
     *
     */

  //console.log(new Date(`${e.target.date.value}T00:00:00`));

  /*const response=await axios.post(`${URL}/maestra/gastoFijoM`,{
    headers: {
      "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
    }
  },{
    fecha_gastofijo:e.target.date.value,
    monto_gastofijo:e.target.monto.value,
    id_ser: ServiceChoise,
    id_per: ,
  })
  //const response=await
};*/

  const services = [
    {
      id_ser: 1,
      nombre_ser: 'Agua'
    },
    {
      id_ser: 2,
      nombre_ser: 'Luz'
    },
    {
      id_ser: 3,
      nombre_ser: 'Internet'
    }
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div className='pl-2 pt-28 w-4/5'>
      <div className='flex flex-col items-center justify-center border-4 border-dashed rounded-md border-green'>
        <h1 className='text-3xl py-3 font-bold text-green'>Pagos Fijos</h1>
        <form className='flex w-full mb-3 items-center justify-center'>
          <div className='flex flex-col mx-4 items-center justify-center w-1/2'>
            <div className='flex flex-col w-full'>
              <label className='text-xl font-bold text-green'>Tipo de pago</label>
              <select
                className='p-2 m-2 border-2 border-green rounded-md'
                name='service'
                required
              >
                <option value='' defaultValue disabled>Seleccione un servicio</option>
                {services.map((service) => (
                  <option key={service.id_ser} value={service.id_ser}>
                    {service.nombre_ser}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-xl font-bold text-green'>Monto</label>
              <div className='relative'>
                <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <span className='text-green sm:text-sm'>$</span>
                </div>
                <input type='number' className='w-full pl-4 p-2 m-2 border-2 border-green rounded-md' placeholder='0' />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-xl font-bold text-green'>Fecha de pago</label>
              <input
                className='p-2 m-2 border-2 border-green rounded-md'
                type='date'
                name='date'
                required
              />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-1/2'>
            {/* descripcion y boton de realizar pago */}
            <div className='flex flex-col w-full'>
              <label className='text-xl font-bold text-green'>Descripción</label>
              <textarea
                className='p-2 m-2 border-2 border-green rounded-md h-32'
                name='description'
                placeholder='Descripción del pago'
                required
              />
            </div>
            <div className='flex flex-col w-full items-center justify-center'>
              <button
                className='w-1/2 p-2 m-2 border-2 bg-green rounded-md text-white font-bold'
                type='submit'
              //onClick={handleSubmit}
              >
                Realizar pago
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className='flex items-center justify-center mt-20 cursor-pointer'>
        <span className='bg-green rounded-md text-white font-semibold py-2 px-8 text-2xl' onClick={handleOpen}>Registrar Servicio</span>    
      </div>
      <FixedModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default FixedCosts;
