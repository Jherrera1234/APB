import api from './config';

export const getAllParts = async () => {
  const resp = await api.get('/parts');
  return resp.data;
};

export const getOnePart = async (id) => {
  const resp = await api.get(`/parts/${id}`);
  return resp.data;
};

export const postPart = async (partData) => {
  const resp = await api.post('/parts', { part: partData });
  return resp.data;
};

export const deletePart = async (id) => {
  const resp = await api.delete(`/parts/${id}`);
  return resp;
};

export const addPart = async (car_id, id) => {
  const resp = await api.put(`parts/cars/${car_id}/categories/${id}`);
  return resp.data;
};

export const getCarParts = async (car_id, category_id) => {
  const resp = await api.get(`cars/${car_id}/categories/${category_id}`);
  return resp.data;
};


