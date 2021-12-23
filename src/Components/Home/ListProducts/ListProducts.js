import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import "./styles.css";
function ListProducts({ data }) {
  console.log(data.groupName);
  return (
    <div className="d-flex flex-start row ">
      <h4 className="d-inline group-name">{data.groupName}</h4>
      {data.Course.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
}

export default ListProducts;
