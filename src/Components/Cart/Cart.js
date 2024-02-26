import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./Cart.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  removeFromCart,
  removeFromSub,
} from "../Redux/action";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);
  const dispatch = useDispatch();

  const handleAdd = (index) => {
    dispatch(increase(index));
  };

  const handleSub = (index) => {
    dispatch(decrease(index));
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
  const totalCost = cart.reduce((total, item) => {
    return total + handleCost(item.id.Cost, item.quantity);
  }, 0);

  const finalCost = cart.reduce((total, item, ) => {
    return total + calculateDiscount(item.id.Cost, item.quantity);
  }, 0);
  return (
    <>
      <Typography variant="h4" className="basket-heading">
        Basket
      </Typography>
      <div className="cart">
        <Box className="cart-box">
          {cart.length <= 0 ? (
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
            cart.map((item, index) => (
              <div className="basket" key={index}>
                <Typography variant="h6">{item.id.title}</Typography>
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
                    Rs {calculateDiscount(item.id.Cost, item.quantity)}
                  </Typography>
                  <Typography variant="h6" fontSize={"0.8rem"} color={"red"}>
                    Instead of Rs {handleCost(item.id.Cost, item.quantity)}
                  </Typography>
                  {/* <Typography variant="h6" fontSize={"0.9rem"}>
                    Rs {item.id.Cost}
                  </Typography>
                  <Typography variant="h6" fontSize={"0.8rem"} color={"red"}>
                    Instead of Rs{item.id.Cost}
                  </Typography>  */}
                </Box>
                <Box className="btn-list">
                  <FaPlus
                    color={"green"}
                    onClick={() => handleAdd(item.id._id)}
                  />
                  <Typography>{item.quantity}</Typography>
                  <FaMinus
                    color={"red"}
                    onClick={() => handleSub(item.id._id)}
                  />
                </Box>
                <FaTrash color={"red"} onClick={() => handleDelete(item.id)} />
              </div>
            ))
          )}
        </Box>
      </div>

      {cart.length > 0 && (
        <>
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
      )}
    </>
  );
}

export default Cart;
