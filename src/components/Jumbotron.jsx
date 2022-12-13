import React from "react";

const Jumbotron = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row fondoAzul">
                <p className="p-5 fs-1">Elige, paga y recibe tu pedido sin moverte de tu casa</p>
            </div>
            <div className="row">
                <div className="col-md-4 item-jumbotron p-3">
                    <p className="text-uppercase fs-5 fw-semibold">Enviamos tu compra</p>
                    <p>Entregas a todo el país</p>
                    <img src={"../images/truck.svg"} alt={"Ícono camión envíos"} width={50} />
                </div>
                <div className="col-md-4 item-jumbotron p-3">
                    <p className="text-uppercase fs-5 fw-semibold">Pagá como quieras</p>
                    <p>Tarjetas de crédito o efectivo</p>
                    <img src={"../images/cash-coin.svg"} alt={"Ícono dinero"} width={50} className="me-3" />
                    <img src={"../images/credit-card.svg"} alt={"Ícono tarjeta de crédito"} width={50} className="me-3" />
                </div>
                <div className="col-md-4 item-jumbotron p-3">
                    <p className="text-uppercase fs-5 fw-semibold">Comprá con seguridad</p>
                    <p>Tus datos siempre protegidos</p>
                    <img src={"../images/shield-check.svg"} alt={"Ícono seguridad"} width={50} />
                </div>
            </div>
        </div>
        
    )
}

export default Jumbotron;