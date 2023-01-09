import React from "react";
import { Link } from "react-router-dom";

const MensajeEnviado = () => {
    return (
        <div className="container py-5 mt-5">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <div className="alert alert-primary" role="alert">
                        <h1>Mensaje enviado!</h1>
                        <p>Pronto nos pondremos en contacto contigo</p>
                    </div>
                    <Link to={"/"} className="btn botones">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default MensajeEnviado;