import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const AddProduct = () => {
  const URL = "https://veterinariamap6iv6-production.up.railway.app/api/v1"
  const { register, formState: {errors}, handleSubmit } = useForm();

  const [Categorias, setCategorias] = useState([]);
  const [Marcas, setMarcas] = useState([]);
  const [Animal, setAnimales] = useState([]);
  

useEffect(()=>{
  console.log(Marcas);
  console.log(Animal);
},[Marcas,Animal])

  useEffect(() => {

    axios.get(`${URL}/catalogo/categoriaC`,{
      headers: {
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
      }
    }).then((res) => {
      setCategorias(res.data.categoria);
    });

    axios.get(`${URL}/catalogo/marcaC`,{
      headers: {
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
      }
    }).then((res) => {
      setMarcas(res.data.marca);
    });

    axios.get(`${URL}/catalogo/animalproductoC`,{
      headers: {
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
      }
    }).then((res) => {
      setAnimales(res.data.animalProducto);
    });

  }, []);

  const onSubmit = async (event) => {
    //console.log(event);
    const data={
      id_pro:event.codigo_pro,
      nombre_pro:event.nombre_pro,
      // stockId_pro:event.stock_pro,
      precioVenta_pro:event.precio_pro,
      estado_pro:event.estado_pro=="true"?1:0,
      id_cat:event.id_cat,
      id_mar:event.id_mar,
      id_anipro:event.id_animal,
      id_vet:1
    }
    await axios
      .post(`${URL}/maestra/productoM`, data,{
        headers: {
        "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmMzIwZjQyOS03NGQ5LTQ3ZGQtYjc0Ny0zMjhlOWM3YTE2Y2EiLCJpYXQiOjE2ODE5NjcxNjcsImV4cCI6MTY4MjU3MTk2N30.l1coPHj-uH7YuOqZgc5EEOh3tltyPzIWParcvMamnSc"
      }
      })
      .then(() => {
        alert("Producto Agregado");
      })
      .catch(() => {
        alert("Error al agregar el producto");
      });

      location.replace("http://localhost:5173/Inventario");
  };
  

  return (
    <div className="z-0 flex h-screen w-full flex-col items-center justify-center gap-5 MuiBox-root">
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <table className="table-auto border-separate border border-[#6ED4A5] ">
          <tbody>
            <tr>
              <th>
                <h1 className="p-8 text-2xl font-Inter font-bold">
                  Agregar Productos:
                </h1>
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left">
                  {" "}
                  Nombre del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Nombre del Producto"
                  name="productName"
                  type="text"
                  {...register("nombre_pro", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                {errors.nombre_pro?.type === 'pattern' && <p>Solo se aceptan letras</p>} 
              </th>
            </tr>

            <tr>
              <th>
                  <p className="p-8 text-xl font-Inter text-left">
                  {" "}
                  Codigo del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Codigo del Producto"
                  name="productCode"
                  type="text"
                  {...register("codigo_pro", { required: true, pattern: /^[0-9]+$/i })}
                />
                {errors.codigo_pro?.type === 'pattern' && <p>Solo se aceptan numeros</p>} 
              </th>
            </tr>
            {/* Checar esto, los catalogos para mostrarlos en los selects y asignarselo al producto a registrar */}
            <tr> 
              <th>
                <p className="p-8 text-xl font-Inter text-left	">
                  {" "}
                  Marca del Producto:{" "}
                </p>
              </th>
              <th>
                <select
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  defaultValue="1"
                  name="productBrand"
                  {...register("id_mar", { required: true })}
                >
                  {Marcas &&
                    Marcas.map((marca) => {
                      return (
                        <option key={marca.id_mar} value={marca.id_mar}>
                          {marca.nombre_mar}
                        </option>
                      );
                    })}
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left	">
                  {" "}
                  Categoria del Producto:{" "}
                </p>
              </th>
              <th>
                <select
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  defaultValue="1"
                  name="productCategory"
                  {...register("id_cat", { required: true })}
                >
                  {Categorias &&
                    Categorias.map((categoria) => {
                      return (
                        <option key={categoria.id_cat} value={categoria.id_cat}>
                          {categoria.nombre_cat}
                        </option>
                      );
                    })}
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left"> Animal: </p>
              </th>
              <th>
                <select
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  defaultValue="1"
                  name="animal"
                  {...register("id_animal", { required: true })}
                >
                  {Animal &&
                  Animal.map((animal)=>{
                    return(
                      <option key={animal.id_anipro} value={animal.id_anipro}>
                        {animal.nombre_anipro}
                      </option>
                    )
                  })

                  }
                </select>
              </th>
            </tr>
            {/* Hasta acá */}
            <tr></tr>
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left">
                  {" "}
                  Precio del Producto:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Precio del Producto"
                  type="text"
                  name="productPrice"
                  {...register("precio_pro", { required: true, pattern: /^[0-9]+$/i })}
                />
                {errors.precio_pro?.type === 'pattern' && <p>Solo se aceptan numeros</p>} 
              </th>
            </tr>
            {/* <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left	">
                  {" "}
                  Stock Inicial:{" "}
                </p>
              </th>
              <th>
                <input
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  placeholder="Cantidad"
                  type="text"
                  name="productStock"
                  {...register("stock_pro", { required: true, pattern: /^[0-9]+$/i })}
                />
                {errors.stock_pro?.type === 'pattern' && <p>Solo se aceptan numeros</p>}
              </th>
            </tr> */}
            <tr>
              <th>
                <p className="p-8 text-xl font-Inter text-left	"> Estado: </p>
              </th>
              <th>
                <select
                  className="w-11/12 border border-slate-300 rounded-md py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-center"
                  defaultValue="1"
                  name="productState"
                  {...register("estado_pro", { required: true })}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No Disponible</option>
                </select>
              </th>
            </tr>
            <tr>
              <th className="p-2">
                <div className="border-4 rounded-full border-[#6ED4A5] bg-[#6ED4A5] w-2/3">
                  <button className="p-2" type="submit" onClick={returnBtn => location.replace("http://localhost:5173/Inventario")}>
                    <p className="text-center p-1"> + Agregar Producto </p>
                  </button>
                </div>
              </th>
              <th className="p-2">
                <div className="border-4 rounded-full border-[#6ED4A5] bg-[#6ED4A5] w-2/3">
                  <button className="p-2" onClick={returnBtn => location.replace("http://localhost:5173/Inventario")}>
                    <p className="text-center p-1"> Cancelar </p>
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddProduct;
