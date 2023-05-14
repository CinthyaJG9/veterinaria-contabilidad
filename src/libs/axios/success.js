export const axiosSuccess = (axiosResponse, endpoint) => {
  const { data } = axiosResponse;

  return { data };
};
