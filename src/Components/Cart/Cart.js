import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./Cart.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { removeFromCart, removeFromSub } from "../Redux/action";

function Cart({ cartItems }) {
  const [quantities, setQuantities] = useState(Array(cartItems.length).fill(1));
  const dispatch = useDispatch();

  const handleAdd = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleSub = (index) => {
    const newQuantities = [...quantities];
    
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      if (newQuantities[index] === 0) {
        // Dispatch the action to remove the item from the cart using the index
        dispatch(removeFromCart(index));
      }
    }
  };

  const calculateDiscount = (cost, quantity) => {
    const numericCost = parseFloat(cost.match(/\d+/)[0]);
    if (quantity > 0) {
      const discount = numericCost * 0.1;
      return (numericCost - discount) * quantity;
    } else {
      return 0;
    }
  };

  const handleCost = (cost, quantity) => {
    const numericCost = parseFloat(cost.match(/\d+/)[0]);
    const total = numericCost * quantity;
    return total;
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const totalCost = cartItems.reduce((total, item, index) => {
    return total + handleCost(item.Cost, quantities[index]);
  }, 0);

  const finalCost = cartItems.reduce((total, item, index) => {
    return total + calculateDiscount(item.Cost, quantities[index]);
  }, 0);
  return (
    <>
      <Typography variant="h4" className="basket-heading">
        Basket
      </Typography>
      <div className="cart">
        <Box className="cart-box">
          {cartItems.length <= 0 ? (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                height: "100%",
              }}
            >
              <Typography variant="body1" align="center">
                Cart is empty
              </Typography>
            </Box>
          ) : (
            cartItems.map((item, index) => (
              <div className='basket'key={index}>
                <Typography variant="h6">{item.title}</Typography>
                <Box className="onetimecost">
                  <Typography variant="h6" fontSize={"1rem"}>
                    one time cost
                  </Typography>
                  <Typography variant="h6" fontSize={"0.9rem"}>
                    Rs 0
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" fontSize={"1rem"}>
                    monthly
                  </Typography>
                  <Typography variant="h6" fontSize={"0.9rem"}>
                    Rs {calculateDiscount(item.Cost, quantities[index])}
                  </Typography>
                  <Typography variant="h6" fontSize={"0.8rem"} color={"red"}>
                    Instead of Rs {handleCost(item.Cost, quantities[index])}
                  </Typography>
                </Box>
                <Box className="btn-list">
                  <FaPlus color={"green"} onClick={() => handleAdd(index)} />
                  <Typography>{quantities[index]}</Typography>
                  <FaMinus color={"red"} onClick={() => handleSub(index)} />
                </Box>
                <FaTrash color={"red"} onClick={() => handleDelete(item.id)} />
              </div>
            ))
          )}
        </Box>
      </div>

      <Box className="bill">
        <Typography variant="h6" color={"blue"}>
          Discounts
        </Typography>
        <Typography variant="h6" color={"blue"}>
          10%
        </Typography>
        <Typography variant="h6" color={"blue"}>
          Rs {totalCost}
        </Typography>
      </Box>
      <Box className="bill2">
        <Typography variant="h6">TotalCost</Typography>
        <Typography variant="h6">10%</Typography>
        <Typography variant="h6">Rs {finalCost}</Typography>
      </Box>
    </>
  );
}

export default Cart;
