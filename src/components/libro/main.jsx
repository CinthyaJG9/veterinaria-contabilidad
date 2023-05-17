import { useState } from 'react';
import ModalLibro from './Modal';
import { ToastContainer } from 'react-toastify';

const meses = [
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

const LibroMain = () => {
  const [yearSelected, setYearSelected] = useState(0);
  const [monthSelected, setMonthSelected] = useState([]);

  const handleMonth = (e) => setMonthSelected([e.target.innerText, yearSelected]);
  const handleYear = (e) => setYearSelected(e.target.innerText);

  return (
    <div>
      <h1 className='text-4xl font-bold text-green-10'>Libros de Balance</h1>
      <div className='flex flex-col items-start justify-center'>
        <span className='mb-3 text-xl font-semibold text-green-10'>Año</span>
        <div className='flex pl-5'>
          {/* hay que hacer fetch a los años */}
          <span
            className='mb-2 mr-2 inline-block cursor-pointer rounded-full bg-green-10 px-3 py-1 text-lg font-semibold text-gray-700'
            onClick={handleYear}
          >
            2022
          </span>
        </div>
        {yearSelected !== 0 && (
          <span className='mb-3 mt-5 pl-5 text-xl font-semibold text-green-10'>
            Mes del {yearSelected}
          </span>
        )}
        <div className='flex pl-8'>
          {/**/}
          {yearSelected !== 0 &&
            meses.map((mes) => (
              <span
                onClick={handleMonth}
                className='mb-2 mr-2 inline-block cursor-pointer rounded-full bg-green-10 px-3 py-1 text-lg font-semibold text-gray-700'
                key={`month_${mes}`}
              >
                {mes}
              </span>
            ))}
        </div>
        <ModalLibro open={monthSelected} handleClose={() => setMonthSelected([])} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default LibroMain;
