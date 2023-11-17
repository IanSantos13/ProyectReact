import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Products from '../json/Products.json'

const ItemListContainer = ({ greeting }) => {
    const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              id ? Products.filter((item) => item.category === id) : Products
            );
          }, 1000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [id]);


    return (
    <div>
        <h1>{greeting}</h1>
        <ItemList item={item}/>
    </div>
)
}

export default ItemListContainer