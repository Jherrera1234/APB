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

export const putPart = async (id, partData) => {
  const resp = await api.put(`/parts/${id}`, { part: partData });
  return resp.data;
};
