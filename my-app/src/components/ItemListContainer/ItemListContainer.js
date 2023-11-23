import React from "react";
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
    const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() =>{
   const queryDb = getFirestore();
   const queryCollection = collection(queryDb, "products");
   if(id){
   const queryFilter = query(queryCollection, where("categoryId", "==", id));
   getDocs(queryFilter).then((res) => setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
   );
   }else{
    getDocs(queryCollection).then((res) => setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
    );
   }
  }, [id])

    return (
    <div>
        <h1>{greeting}</h1>
        <ItemList item={item}/>
    </div>
)
}

export default ItemListContainer