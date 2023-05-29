import { Modal } from "@mui/material";
import { BsTools } from "react-icons/bs";
import { apiVet } from "../../services/api/instaceApi";
import { useNavigate } from "react-router-dom";

const FixedModal = ({ open, handleClose }) => {

    const navite = useNavigate();

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
            const response = await apiVet.post(
                '/catalogo/servicioC',
                {
                    nombre_ser: e.target.serviceName.value,
                    descripcion_ser: e.target.serviceDesc.value
                },
            );
            console.log(response.data);
            //window.location.href = '/GastosFijos';
            navigate('/GastosFijos');
        } catch (error) {
            toast.error(`Ups! Hubo un error, ${error}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        }
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='h-modal fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full'>
                <div className='mb-1 h-auto w-auto rounded-lg border-4 border-dashed border-green bg-white p-5 md:w-2/5'>
                    <div className='mb-6 flex cursor-pointer text-green'>
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
                    <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                        <div className='flex flex-col w-full'>
                            <label className='text-xl font-bold text-green'>Nombre del servicio</label>
                            <input
                                className='p-2 m-2 border-2 border-green rounded-md'
                                type='text'
                                name='serviceName'
                                placeholder='Nombre del servicio'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-xl font-bold text-green'>Descripción</label>
                            <input
                                className='p-2 m-2 border-2 border-green rounded-md h-32'
                                name='serviceDesc'
                                placeholder='Descripción del servicio'
                                type='text'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <button
                                className='w-1/2 p-2 m-2 border-2 bg-green rounded-md text-white font-bold'
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