import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Product({ item }) {
  return (
    <div className="product-item col-md-3">
      <a href=".." className="d-flex flex-column text-decoration-none">
        <img src={item.image} alt="" />
        <span className="product-name align-self-start">{item.name}</span>
        <span className="product-author  align-self-start">
          {item.createdBy}
        </span>
        <Stack className="d-flex flex-row">
          <Rating
            className=""
            defaultValue={item.ratePoint}
            precision={0.5}
            readOnly
          />{" "}
          <span>({item.rateCount})</span>
        </Stack>
        <b className="align-self-start text-dark">$ {item.price}</b>
        <span>{item.isBestSeller ? "Best Seller" : ""}</span>
      </a>
    </div>
  );
}

export default Product;
