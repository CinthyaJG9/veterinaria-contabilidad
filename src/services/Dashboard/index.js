import req from './req';

export const getAllEspecies = async () => {
  try {
    const { data } = await req.get('/catalogo/especieC');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllVets = async () => {
  try {
    const { data } = await req.get('/maestra/veterinariaM');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllMascotas = async () => {
  try {
    const { data } = await req.get('/maestra/mascotaM');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllRazas = async () => {
  try {
    const { data } = await req.get('/catalogo/razaC');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRazaById = async (id) => {
  try {
    const { data } = await req.get(`catalogo/razaC/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getEspecieById = async (id) => {
  try {
    const { data } = await req.get(`catalogo/especieC/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllColor = async () => {
  try {
    const { data } = await req.get('/catalogo/colorC');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
