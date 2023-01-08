import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);
    
    const incrementarContador = () => {
        if(counter < itemStock){
            setCounter(counter + 1);
        }     
    }

    const decrementarContador = () => {
        if(counter > 1){
        setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock]);

    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group col-md-2 justify-content-md-center" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-secondary botones fs-6" onClick={decrementarContador}>-</button>
                        <button type="button" className="btn btn-secondary botones fs-6">{counter}</button>
                        <button type="button" className="btn btn-secondary botones fs-6" onClick={incrementarContador}>+</button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 offset-3 justify-content-md-center">
                    {vendido ? <div>
                        <Link to={"/"} className="btn btn-secondary botones fs-6 me-3">Seguir comprando</Link>
                        <Link to={"/cart"} className="btn btn-secondary botones fs-6 ms-3">Terminar mi compra</Link>
                    </div> : <button className="btn btn-secondary botones fs-6" onClick={() => {addToCart(counter)}}><b>Agregar al carrito</b></button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;