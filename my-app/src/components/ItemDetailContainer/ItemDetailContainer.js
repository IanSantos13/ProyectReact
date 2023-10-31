import { useState, useEffect } from "react";
import Products from "../json/Products.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Products.find((item) => item.id === parseInt(id)));
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
