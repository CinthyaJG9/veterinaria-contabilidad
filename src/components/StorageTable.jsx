import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://veterinariamap6iv6-production.up.railway.app/api/v1';

const disponibility = (boolean) => {
  if (boolean) {
    return 'Disponible';
  } else {
    return 'No disponible';
  }
};

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

function createData(id, nomProduct, cat, marc, anim, prec, stk, edo) {
  return { id, nomProduct, cat, marc, anim, prec, stk, edo };
}

// const rows = [
//  /* {
//     id: 1,
//     nomProduct: 'Purina',
//     marc: 'Purina',
//     prec: '$200',
//     stk: 4,
//     edo: 'Activo',
//     cat: 'Alimento'
//   },
//   {
//     id: 2,
//     nomProduct: 'Purina',
//     marc: 'Purina',
//     prec: '$200',
//     stk: 4,
//     edo: 'Activo',
//     cat: 'Alimento'
//   },
//   {
//     id: 3,
//     nomProduct: 'Purina',
//     marc: 'Purina',
//     prec: '$200',
//     stk: 4,
//     edo: 'Activo',
//     cat: 'Alimento'
//   },
//   {
//     id: 4,
//     nomProduct: 'Purina',
//     marc: 'Purina',
//     prec: '$200',
//     stk: 4,
//     edo: 'Activo',
//     cat: 'Alimento'
//   },
//   {
//     id: 5,
//     nomProduct: 'Purina',
//     marc: 'Purina',
//     prec: '$200',
//     stk: 4,
//     edo: 'Activo',
//     cat: 'Alimento'
//   },
//   {
//     id: 6,
//     nomProduct: 'Purina',
//     marc: 'Purina',
//     prec: '$200',
//     stk: 4,
//     edo: 'Activo',
//     cat: 'Alimento'
//   }*/
// ];

const StorageTable = () => {
  const [Productos, setProductos] = useState([]);
  const [Rows, setRows] = useState([]);
  const [Categorias, setCategorias] = useState([]);
  const [Marcas, setMarcas] = useState([]);
  const [Animales, setAnimales] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/maestra/productoM`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI4MjYyOWNjYy01NTc3LTQwZmYtOWE3NS00MTM5ZDIyNWQ3YWQiLCJpYXQiOjE2ODIwNjY4MDksImV4cCI6MTY4MjY3MTYwOX0.Lk4RDAEweN-G3j9YxRpZiC3YJw4py75SVUleRkmFhls'
        }
      })
      .then((res) => {
        setProductos(res.data.producto);
        console.log(res.data.producto);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${URL}/catalogo/categoriaC`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI4MjYyOWNjYy01NTc3LTQwZmYtOWE3NS00MTM5ZDIyNWQ3YWQiLCJpYXQiOjE2ODIwNjY4MDksImV4cCI6MTY4MjY3MTYwOX0.Lk4RDAEweN-G3j9YxRpZiC3YJw4py75SVUleRkmFhls'
        }
      })
      .then((res) => {
        setCategorias(res.data.categoria);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${URL}/catalogo/marcaC`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI4MjYyOWNjYy01NTc3LTQwZmYtOWE3NS00MTM5ZDIyNWQ3YWQiLCJpYXQiOjE2ODIwNjY4MDksImV4cCI6MTY4MjY3MTYwOX0.Lk4RDAEweN-G3j9YxRpZiC3YJw4py75SVUleRkmFhls'
        }
      })
      .then((res) => {
        setMarcas(res.data.marca);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${URL}/catalogo/animalproductoC`, {
        headers: {
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI4MjYyOWNjYy01NTc3LTQwZmYtOWE3NS00MTM5ZDIyNWQ3YWQiLCJpYXQiOjE2ODIwNjY4MDksImV4cCI6MTY4MjY3MTYwOX0.Lk4RDAEweN-G3j9YxRpZiC3YJw4py75SVUleRkmFhls'
        }
      })
      .then((res) => {
        setAnimales(res.data.animalProducto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    //let rows = [Productos];
    //console.log(Productos);
    if (Productos.length > 0) {
      const rows = [];
      Productos.forEach((producto) => {
        rows.push(
          {
            id: producto.id_pro,
            nomProduct: producto.nombre_pro,
            cat: Categorias.find((item) => item.id_cat == producto.id_cat)
              .nombre_cat,
            marc: Marcas.find((item) => item.id_mar == producto.id_mar)
              .nombre_mar,
            anipro: Animales.find(
              (item) => item.id_anipro == producto.id_anipro
            ).nombre_anipro,
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
      setRows(rows);
    }
  }, [Productos]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='MuiBox-root css-0 z-0 flex h-full w-full flex-col items-center justify-center gap-5'>
      <div className='p-2'>
        <h1 className='font-Inter p-8 text-center text-4xl text-[#6ED4A5]'>
          Inventario
        </h1>
      </div>

      <div className='rounded-full border-4 border-[#6ED4A5] bg-[#6ED4A5]'>
        <a href='./AddProduct'>
          <button className='p-2'>+ Agregar Producto</button>
        </a>
      </div>

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
