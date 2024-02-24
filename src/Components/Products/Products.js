import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Products.css";
import productsData from "./Products.json";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

function Products() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/cart");
  };
  return (
    <div className="product-container">
      {productsData.map((product, index) => (
        <Card key={index} className="products" sx={{ maxWidth: 300 }}>
          {/* Use background image from JSON */}
          <CardMedia
            component="img"
            height="194"
            image={product.background}
            alt={product.title}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* Use image from JSON */}
            <img
              src={product.img}
              alt={product.title}
              style={{ height: 55, width: 80, marginTop: -20 }}
            />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {product.icons.map((icon, i) => (
                <div key={i}>
                  <div className="icons">
                    <img
                      src={icon}
                      alt={`Icon ${i}`}
                      style={{ height: 20, width: 20, marginRight: "0.5rem" }}
                    />
                  </div>
                  <Typography sx={{ fontSize: "0.5rem" }}>
                    {product.features[i]}
                  </Typography>
                </div>
              ))}
            </Box>
          </CardContent>
          <Divider />
          <Box className="card-footer">
            <Box className="charges">
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "0.6rem" }}
              >
                {product.Charges}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontSize: "1rem" }}
              >
                {product.Cost}
              </Typography>
            </Box>
            <Button className="select" size="medium" onClick={handleClick}>
              SELECT
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  );
}

export default Products;
