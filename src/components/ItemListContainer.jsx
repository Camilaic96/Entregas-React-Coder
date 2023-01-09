import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams, Navigate } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [existe, setExiste] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;        
    
        getDocs(q).then((snapShot) => {
            if (snapShot.size !== 0) {
                setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
                setExiste(true);
                setLoading(false);  
            } else {
                setLoading(false);
            }     
        });

    }, [id]);

    return (
        <div className="row">
            <div className="col-md-8 offset-2 container py-5">
                { loading ? <Loading /> : (existe ? <ItemList items={items} /> : <Navigate to={"*"} />) }
            </div>
        </div>
    )
}

export default ItemListContainer;