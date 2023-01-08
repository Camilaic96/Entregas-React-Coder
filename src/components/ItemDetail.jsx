import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="row my-5 mt-5 pt-5">
            <div className="col-md-8 offset-md-2 text-center">
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