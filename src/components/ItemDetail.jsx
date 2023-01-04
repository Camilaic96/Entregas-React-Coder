import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const onAdd = (quantity) => {
        console.log("Agregaste: " + quantity + " productos!");
    }

    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.image} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className="fs-4"><b>${item.price}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;