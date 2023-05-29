import useSWR from 'swr'

export function useProduct(swrConfig = {}) {

    const { data: categorias, error: errorCategorias, isLoading: isLoadingCategorias } = useSWR('/catalogo/categoriaC', swrConfig);
    const { data: marcas, error: errorMarcas, isLoading: isLoadingMarcas } = useSWR('/catalogo/marcaC', swrConfig);
    const { data: animales, error: errorAnimales, isLoading: isLoadingAnimales } = useSWR('/catalogo/animalproductoC', swrConfig);
    const { data: productos, error: errorProductos, isLoading: isLoadingProductos } = useSWR('/maestra/productoM', swrConfig);

    return {
        isLoading: isLoadingCategorias || isLoadingMarcas || isLoadingAnimales || isLoadingProductos,
        error: errorCategorias || errorMarcas || errorAnimales || errorProductos,
        data: {
            categorias,
            marcas,
            animales,
            productos
        }
    }

}