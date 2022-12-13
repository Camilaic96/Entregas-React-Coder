import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <Link to={"/item/" + item.id} className="text-decoration-none">
            <div className="card border border-0 p-1 mb-5 card-producto">
                <img src={item.image} className="card-img-top m-0" alt={item.name}/>
                <div className="card-body text-center">
                    <p className="card-text fs-5 fw-semibold p-1 mb-0">{item.name}</p>
                    <p className="card-text fs-6 fw-semibold p-1 mb-0">${item.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;