import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row my-5 pt-5 mt-5">
                <div className="col text-center">
                    <h1>Error 404!</h1>
                    <h3>La página que estás buscando no existe!</h3>
                    <Link to={"/"} className="btn botones">Ir a la Página Principal</Link>
                </div>
            </div>  
        </div>
    )
}

export default Error404;