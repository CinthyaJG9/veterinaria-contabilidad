import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useProduct } from "../hooks/useSWR";
import { Link } from 'react-router-dom';


const disponibility = (boolean) => boolean ? "Disponible" : "No disponible";



const columns = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 20,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'nomProduct',
    headerName: 'Nombre del Producto',
    minWidth: 200,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'cat',
    headerName: 'Categoria',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'marc',
    headerName: 'Marca',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'anipro',
    headerName: 'Animal',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'prec',
    headerName: 'Precio',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'stk',
    headerName: 'Stock',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    field: 'edo',
    headerName: 'Estado',
    minWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US')
  }





  // {
  //   id: 'nomProduct',
  //   label: 'Nombre del Producto',
  //   minWidth: 200,
  //   align: 'Center',
  //   format: (value) => value.toLocaleString('en-US'),
  // }
];

const createData = (id, nomProduct, cat, marc, anim, prec, stk, edo) => ({ id, nomProduct, cat, marc, anim, prec, stk, edo })

const StorageTable = () => {
  const [Rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const { data, error, isLoading } = useProduct()


  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>


  const handleRows = (rows) => setRows(rows);


  const { animales: { animalProducto }, categorias: { categoria }, marcas: { marca }, productos: { producto } } = data

  

  if (producto.length > 0) {
    const rows = [];
    producto.forEach((producto) => {
      rows.push({
        id: producto.id_pro,
        nomProduct: producto.nombre_pro,
        cat: categoria.find(item => item.id_cat == producto.id_cat).nombre_cat,
        marc: marca.find(item => item.id_mar == producto.id_mar).nombre_mar,
        anipro: animalProducto.find(item => item.id_anipro == producto.id_anipro).nombre_anipro,
        prec: `$ ${producto.precioVenta_pro}`,
        stk: producto.stockId_pro,
        edo: disponibility(producto.estado_pro)
      }
        // createData(
        //   producto.id_pro,
        //   producto.nombre_pro,
        //   Categorias.find(item=>item.id_cat==producto.id_cat).nombre_cat,
        //   Marcas.find(item=>item.id_mar==producto.id_mar).nombre_mar,
        //   Animales.find(item=>item.id_anipro==producto.id_anipro).nombre_anipro,
        //   `$ ${producto.precioVenta_pro}`,
        //   producto.stockId_pro,
        //   disponibility(producto.estado_pro)
        // )
      );
    });
    handleRows(rows);
  }



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='MuiBox-root css-0 mb-3 z-0 flex h-full w-full flex-col items-center justify-center gap-5'>
      <div className='p-0'>
        <h1 className='font-Inter p-3 text-center text-4xl text-green'>
          Inventario
        </h1>
      </div>
      <Link to='/AddProduct' className='rounded-lg border-4 border-green bg-green p-1 flex items-center justify-center'>
        + Agregar Producto
      </Link>
      <div className='MuiBox-root h-[26rem] w-[1000px]'>
        <DataGrid
          rows={Rows}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onPageChange={handleChangePage}
          onPageSizeChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};


export default StorageTable;
