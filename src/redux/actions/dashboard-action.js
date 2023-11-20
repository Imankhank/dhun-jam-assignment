import { DASH_ACTION, DASH_UPDATE } from "../types";

export const dashAction = (id, onSuccess, onError) => {
  return {
    type: DASH_ACTION,
    id,
    onSuccess,
    onError,
  };
};
export const dashUpdateAction = (id, data, onSuccess, onError) => {
  return {
    type: DASH_UPDATE,
    id,
    data,
    onSuccess,
    onError,
  };
};
