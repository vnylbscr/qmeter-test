import { ADD_BASKET, REMOVE_BASKET, RESET_BASKET } from "../types";

export const AddBasket = (basket) => ({ type: ADD_BASKET, payload: basket });

export const RemoveBasket = (itemId) => ({
  type: REMOVE_BASKET,
  payload: itemId,
});

export const ResetBasket = () => {
  return {
    type: RESET_BASKET,
    payload: null,
  };
};
