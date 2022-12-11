import React from "react";

const Item = ({item}) => {
    return(
        <div className="card">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <p className="card-text">{item.name}</p>
            </div>
        </div>
    )
}

export default Item;