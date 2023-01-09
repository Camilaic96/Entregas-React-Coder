import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [existe, setExiste] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setExiste(true);
                setLoading(false);     
            } else {
                setLoading(false);
            }
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                { loading ? <Loading /> : (existe ? <ItemDetail item={item} /> : <Navigate to={"*"} />) }
            </div>
        </div>
    )
}

export default ItemDetailContainer;