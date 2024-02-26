export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

export const increase = (itemId) => ({
  type: "INCREASE_QUANTITY",
  payload: itemId,
});

export const decrease = (itemId) => ({
  type: "DECREASE_QUANTITY",
  payload: itemId,
});
