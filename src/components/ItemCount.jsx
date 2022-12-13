import React, { useState, useEffect } from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);
    
    useEffect(()=>{
       setStock(stockItems)

    },[stockItems])
    //Funcion para incrementar contador
    const incrementarContador = () => {
        //no dejamos que se ingresen mas del stock limite
        if(counter < stock){
            setCounter(counter + 1);
        }     
    }


    //Funcion para decrementar contador
    const decrementarContador = () => {
        //no dejamos que se ingresen nªs negativos
        if(counter > 1){
        setCounter(counter - 1);
        }
    }

    //Funcion para agregar productos al carro y no sobrepasar el stock disponible
    const onAdd = () => {
        if((stock > 0) && (counter <= stock)){
        console.log("Agregaste " + counter + " productos al carro")
        setStock(stock - counter);
        //resteamos el contador
        setCounter(0);
        }
    }


    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-secondary botones fs-6" onClick={decrementarContador}>-</button>
                        <button type="button" className="btn btn-secondary botones fs-6">{counter}</button>
                        <button type="button" className="btn btn-secondary botones fs-6" onClick={incrementarContador}>+</button>
                    </div>
                    <button className="btn btn-secondary botones fs-6 ms-5" onClick={onAdd}><b>Agregar al carrito</b></button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;