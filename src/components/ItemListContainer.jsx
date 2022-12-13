import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "./json/arrayProductos.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000)
        })

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);

    return (
        <div>
            <div className="row">
                <nav aria-label="breadcrumb" className="col-md-8 offset-md-2 my-3">
                    <ol className="breadcrumb">
                        <Link className="breadcrumb-item" to={"/"}>Inicio</Link>
                        <Link className="breadcrumb-item" to={"/"}>Productos</Link>
                        <li className="breadcrumb-item active text-capitalize" aria-current="page">{id}</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-md-8 offset-2 container py-5">
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;