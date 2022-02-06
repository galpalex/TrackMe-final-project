import api from "../api/api";

const onDelete = async (place) => {
  await api.delete(`/places/${place._id}`);
};

const onEdit = async (place, body) => {
  await api.put(`/places/${place._id}`, body);
};

const onCreate = async (body) => {
  const place = await api.post(`/places`, body);
  return place;
};

export { onDelete, onEdit, onCreate };
