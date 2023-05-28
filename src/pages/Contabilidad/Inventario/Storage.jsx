import { Link } from 'react-router-dom';
import StorageTable from '../../../components/StorageTable';

const Storage = () => {
  return (
    <div className='pl-2 pt-20 w-4/5'>
      <div className='flex flex-col items-center justify-center border-4 border-dashed rounded-md border-green-10'>
        <StorageTable />
      </div>
      <div className='flex flex-wrap mb-3 mt-2 gap-4'>
        <div className='flex items-center justify-center mt-3 cursor-pointer'>
          <Link to={'/Proveedor'} className='bg-green-10 rounded-md text-white font-semibold py-1 px-7 text-lg'>Agregar Proveedor</Link>
        </div>
        <div className='flex items-center justify-center mt-3 cursor-pointer'>
          <Link to={'/Proveedor'} className='bg-green-10 rounded-md text-white font-semibold py-1 px-7 text-lg'>Ver Proveedores</Link>
        </div>
        <div className='flex items-center justify-center mt-3 cursor-pointer'>
          <Link to={'/NuevoLote'} className='bg-green-10 rounded-md text-white font-semibold py-1 px-7 text-lg'>Nuevo Lote</Link>
        </div>
      </div>
    </div>
  );
};

export default Storage;
