import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container py-5 mt-5">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <div className="alert alert-primary" role="alert">
                        <h1>Gracias por tu compra!</h1>
                        <p>Tu número de Compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn botones">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;