import { Modal } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';

const ModalLibro = ({ open, handleClose }) => {
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
      toast('📋 Se guardo en portapapeles!', {
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

  return (
    <Modal
      open={open.length !== 0}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full items-center justify-center flex'>
        <div className='p-5 mb-1 w-auto md:w-2/5 h-auto border-green-10 border-4 rounded-lg border-dashed bg-white'>
          <div className='mb-6 flex cursor-pointer text-green-10'>
            <BiSearchAlt className='float-left mr-3' size={30} />
            <h2 className='text-3xl ml-2'>Libro {open[0]} del {open[1]}</h2>
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
          <div className='flex flex-col mb-6 mt-3 justify-center items-center'>
            <table className='table-auto w-full font-bold'>
              <thead className='border-b-2 border-green-10'>
                <tr className='text-green-10'>
                  <th className='px-4 py-2 text-left'>Cuenta</th>
                  <th className='px-4 py-2 text-left'>Debe</th>
                  <th className='px-4 py-2 text-left'>Haber</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={`${index}_${item}`} className={`border-b-green-10 ${index + 1 === list.length ? 'border-b-4' : 'border-b-2'}`}>
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
                  <td className='px-4 py-2 text-center font-bold'>${sumDebe}</td>
                  <td className='px-4 py-2 text-center font-bold'>${sumHaber}</td>
                </tr>
              </tbody>
            </table>
            <span className='mt-5 border-2 mr-2 inline-block cursor-pointer rounded-lg border-green-10 px-3 py-1 text-lg font-bold text-gray-700' onClick={copyOnClick}>
              Total: {total > 0 ? `$${total}` : `-$${total * -1}`}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLibro;
