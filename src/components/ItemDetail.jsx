import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.image} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className="fs-4"><b>${item.price}</b></p>
                <ItemCount stockItems={item.stock} />
                <div className="row">
                    <button className=" col-md-4 offset-4 btn btn-secondary botones fs-6"><Link aria-current="page" to={"/"}>Volver</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;