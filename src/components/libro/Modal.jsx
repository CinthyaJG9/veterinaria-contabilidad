import { Modal } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import { toast } from 'react-toastify';

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const ModalLibro = ({ open, handleClose, setMonthSelected }) => {
  // por las props se tiene que recibir el mes y el año
  // se tiene que hacer fetch a la base de datos para obtener la lista de cuentas y sus valores
  // se tiene que hacer fetch a la base de datos para obtener el total de la suma de los valores de las cuentas o calcularlo en el front
  // el valor 0 de open es el mes y el valor 1 es el año
  const list = [
    {
      cuenta: 'Punto de Venta',
      debe: 2
    },
    {
      cuenta: 'Lote',
      debe: 8
    },
    {
      cuenta: 'Gastos Fijos',
      debe: 2
    },
    {
      cuenta: 'Punto de Venta',
      haber: 3
    },
    {
      cuenta: 'Lote',
      haber: 3
    },
    {
      cuenta: 'Gastos Fijos',
      haber: 3
    }
  ];

  const total = list.reduce((acc, item) => {
    if (item.debe) {
      return acc + item.debe;
    } else {
      return acc - item.haber;
    }
  }, 0);

  const sumDebe = list.reduce((acc, item) => {
    if (item.debe) {
      return acc + item.debe;
    } else {
      return acc;
    }
  }, 0);

  const sumHaber = list.reduce((acc, item) => {
    if (item.haber) {
      return acc + item.haber;
    } else {
      return acc;
    }
  }, 0);

  const copyOnClick = () => {
    navigator.clipboard.writeText(total).then(() => {
      toast('📋 Se guardo en el portapapeles!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    });
  };

  const handleNext = () => {
    // Cambiar el mes a siguiente mes
    // si no hay siguiente mes y año, deshabilitar el boton
    if (open[0] === 'Diciembre') {
      // cambiar el año a siguiente año
      // cambiar el mes a enero
    } else {
      const index = months.indexOf(open[0]) + 1;
      // cambiar el mes al siguiente mes
      setMonthSelected([months[index], open[1]]);
    }
  };

  const handlePrev = () => {
    // Cambiar el mes a anterior mes
    // si no hay anterior mes y año, deshabilitar el boton
    if (open[0] === 'Enero') {
      // cambiar el año a anterior año
      // cambiar el mes a diciembre
    } else {
      const index = months.indexOf(open[0]) - 1;
      // cambiar el mes al anterior mes
      setMonthSelected([months[index], open[1]]);
    }
  };

  return (
    <Modal
      open={open.length !== 0}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='h-modal fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full'>
        <div className='mb-1 h-auto w-auto rounded-lg border-4 border-dashed border-green-10 bg-white p-5 md:w-2/5'>
          <div className='mb-6 flex cursor-pointer text-green-10'>
            <BiSearchAlt className='float-left mr-3' size={30} />
            <h2 className='ml-2 text-3xl'>
              Libro {open[0]} del {open[1]}
            </h2>
            <button
              onClick={handleClose}
              type='button'
              className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-gray-200 hover:text-gray-900'
            >
              <svg
                aria-hidden
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='flex items-center justify-center w-full'>
            <div className='mr-3 mb-6 mt-3 flex flex-col items-center justify-center w-1/12 text-green-10'>
              <BsChevronLeft className='cursor-pointer' size={30} onClick={handlePrev} />
            </div>
            <div className='mb-6 mt-3 flex flex-col items-center justify-center w-4/5'>
              <table className='w-full table-auto font-bold'>
                <thead className='border-b-2 border-green-10'>
                  <tr className='text-green-10'>
                    <th className='px-4 py-2 text-left'>Cuenta</th>
                    <th className='px-4 py-2 text-left'>Debe</th>
                    <th className='px-4 py-2 text-left'>Haber</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item, index) => (
                    <tr
                      key={`${index}_${item}`}
                      className={`border-b-green-10 ${index + 1 === list.length ? 'border-b-4' : 'border-b-2'
                        }`}
                    >
                      <td className='px-4 py-2'>{item.cuenta}</td>
                      <td className='px-4 py-2 text-center'>
                        {item.debe ? `$${item.debe}` : '-'}
                      </td>
                      <td className='px-4 py-2 text-center'>
                        {item.haber ? `$${item.haber}` : '-'}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className='px-4 py-2 text-right font-bold'>Total</td>
                    <td className='px-4 py-2 text-center font-bold'>
                      ${sumDebe}
                    </td>
                    <td className='px-4 py-2 text-center font-bold'>
                      ${sumHaber}
                    </td>
                  </tr>
                </tbody>
              </table>
              <span
                className='mr-2 mt-5 inline-block cursor-pointer rounded-lg border-2 border-green-10 px-3 py-1 text-lg font-bold text-gray-700'
                onClick={copyOnClick}
              >
                Total: {total > 0 ? `$${total}` : `-$${total * -1}`}
              </span>
            </div>
            <div className='ml-3 mb-6 mt-3 flex flex-col items-center justify-center w-1/12 text-green-10'>
              <BsChevronRight className='cursor-pointer' size={30} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLibro;
