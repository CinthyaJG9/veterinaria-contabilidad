import { AiOutlineShoppingCart, AiOutlineUser, AiFillBook} from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';
import { CiBoxes } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const listItems = [
  {
    label: 'Libro',
    icon: <AiFillBook className='text-2xl' />,
    path: '/Libro' // o el path que corresponda
  },
  {
    label: 'Pago Gastos Fijos',
    icon: <BsCashCoin className='text-2xl' />,
    path: '/pago-gastos-fijos' // o el path que corresponda
  },
  // {
  //   label: 'Pago Gastos Generales',
  //   icon: <AiOutlineShoppingCart className='text-2xl' />,
  //   path: '/pago-gastos-generales' // o el path que corresponda
  // },
  {
    label: 'Inventario',
    icon: <CiBoxes className='text-2xl' />,
  }
];

const Drawer = () => {
  return (
    <div className='w-2/12 h-full pt-20 pl-5 pb-5'>
      <div className='fixed border-r-2 h-full rounded-sm border-green-10'>
        <h5 className='px-3 font-semibold uppercase text-green-10 text-2xl'>
          ¡Bienvenido!
        </h5>
        {/* imagen de un usuario y genernte debajo */}
        <div className='flex flex-col items-start px-2 py-2 text-green-10'>
          <AiOutlineUser className='text-5xl pl-3' />
          <span className='ml-2 text-gray-500'>Gerente</span>
        </div>
        <div className='py-4 overflow-y-auto'>
          {listItems.map((item, index) => (
            <div
              key={index}
              className='flex items-center px-1 py-2 text-green-10 hover:bg-green-10 hover:text-white cursor-pointer'
            >
              <Link to={item.path} className='flex'>
                {item.icon}
                <span className='ml-2 text-gray-500'>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
