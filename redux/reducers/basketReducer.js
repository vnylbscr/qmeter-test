import { RESET_BASKET, ADD_BASKET, REMOVE_BASKET } from "../types";

const initialState = {
  basket: [],
  total: 0,
};

export const basketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BASKET:
      const existingItem = state.basket.find(
        (item) => action.payload.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        return {
          ...state,
          total: state.total + existingItem.price,
        };
      } else {
        const addedItem = action.payload;
        addedItem.quantity = 1;
        const newTotal = state.total + addedItem.price;
        return {
          ...state,
          basket: [...state.basket, addedItem],
          total: newTotal,
        };
      }

    case REMOVE_BASKET:
      const removedItem = state.basket.find(
        (item) => item.id === action.payload
      );
      const newItems = state.basket.filter(
        (item) => item.id !== action.payload
      );
      const newTotal = state.total - removedItem.price * removedItem.quantity;
      return {
        ...state,
        basket: newItems,
        total: Math.ceil(newTotal),
      };
    case RESET_BASKET:
      return {
        ...state,
        basket: [],
        total: 0,
      };
    default:
      return state;
  }
};
