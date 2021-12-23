import React from "react";
import { useState, useEffect } from "react";
import ListProducts from "../Home/ListProducts/ListProducts";

function ProductContainer(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:1880/course")
      .then((res) => res.json())
      .then((courses) => {
        setData(courses);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((list) => (
        <ListProducts data={list} />
      ))}
    </div>
  );
}

export default ProductContainer;
