import { useState } from 'react';
import ModalLibro from './Modal';
import { ToastContainer } from 'react-toastify';
// import Nav from '../Nav';

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

const LibroMain = () => {
  const [yearSelected, setYearSelected] = useState(0);
  const [monthSelected, setMonthSelected] = useState([]);

  const handleMonth = (e) =>
    setMonthSelected([e.target.innerText, yearSelected]);
  const handleYear = (e) => setYearSelected(e.target.innerText);

  return (
    <div className='pl-2 pt-20'>
      <h1 className='text-4xl font-bold text-green'>Libros de Balance</h1>
      <div className='flex flex-col items-start justify-center'>
        <span className='mb-3 text-xl font-semibold text-green'>Año</span>
        <div className='flex pl-5'>
          {/* hay que hacer fetch a los años */}
          <span
            className='mb-2 mr-2 inline-block cursor-pointer rounded-full bg-green px-3 py-1 text-lg font-semibold text-gray-700'
            onClick={handleYear}
          >
            2022
          </span>
        </div>
        {yearSelected !== 0 && (
          <span className='mb-3 mt-5 pl-5 text-xl font-semibold text-green'>
            Mes del {yearSelected}
          </span>
        )}
        <div className='flex pl-8 flex-wrap gap-2'>
          {/**/}
          {yearSelected !== 0 &&
            months.map((mes) => (
              <span
                onClick={handleMonth}
                className='mb-2 mr-2 inline-block cursor-pointer rounded-full bg-green px-3 py-1 text-lg font-semibold text-gray-700'
                key={`month_${mes}`}
              >
                {mes}
              </span>
            ))}
        </div>
        <ModalLibro
          open={monthSelected}
          handleClose={() => setMonthSelected([])}
          setMonthSelected={setMonthSelected}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default LibroMain;
