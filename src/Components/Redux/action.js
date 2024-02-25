export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (itemId) => ({
    
    type: "REMOVE_FROM_CART",
    payload:itemId
        
})

export const removeFromSub = (index) => ({
  type: "REMOVE_FROM_SUB",
  payload:index
})