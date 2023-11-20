import { api } from "./api";

export const dashApi = (id) => {
  return api.get(`/${id}`, {
    token: localStorage?.getItem("token"),
  });
};
export const dashUpdateApi = (id, data) => {
  return api.put(`/${id}`, JSON.stringify(data), {
    token: localStorage?.getItem("token"),
  });
};
