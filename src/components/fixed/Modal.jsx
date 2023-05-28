import { Modal } from "@mui/material";
import { BsTools } from "react-icons/bs";

const FixedModal = ({ open, handleClose }) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='h-modal fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full'>
                <div className='mb-1 h-auto w-auto rounded-lg border-4 border-dashed border-green-10 bg-white p-5 md:w-2/5'>
                    <div className='mb-6 flex cursor-pointer text-green-10'>
                        <BsTools className='float-left mr-3' size={30} />
                        <h2 className='ml-2 text-3xl'>
                            Registrar Servicios
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
                    <form className='flex flex-col w-full'>
                        <div className='flex flex-col w-full'>
                            <label className='text-xl font-bold text-green-10'>Nombre del servicio</label>
                            <input
                                className='p-2 m-2 border-2 border-green-10 rounded-md'
                                type='text'
                                name='name'
                                placeholder='Nombre del servicio'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-xl font-bold text-green-10'>Descripción</label>
                            <textarea
                                className='p-2 m-2 border-2 border-green-10 rounded-md h-32'
                                name='description'
                                placeholder='Descripción del servicio'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <button
                                className='w-1/2 p-2 m-2 border-2 bg-green-10 rounded-md text-white font-bold'
                                type='submit'
                            //onClick={handleSubmit}
                            >
                                Registrar servicio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default FixedModal;