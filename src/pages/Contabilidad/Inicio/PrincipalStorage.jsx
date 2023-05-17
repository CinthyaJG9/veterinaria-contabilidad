import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrincipalStorage = () => {
  return (
    <div className='MuiBox-root css-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-5'>
      <form>
        <div class='grid grid-cols-2 gap-3'>
          <div class='col-span-1'>
            <button className='p-2'>
              <p className='p-1 text-center'> Gastos Fijos </p>
            </button>
          </div>
          <div class='col-span-1'>
            <button className='p-2'>
              <p className='p-1 text-center'> Inventario </p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrincipalStorage;
