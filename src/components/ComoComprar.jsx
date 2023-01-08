import React from "react";

const ComoComprar = () => {
    return(
        <div className="container-fluid my-5 mb-5 mt-5 pt-5" id="como-comprar">
            <div className="row col-md-6 offset-3 mb-4 mt-5 pt-5">
                <h2 className="sombra">Cómo comprar</h2>
            </div>
            <div className="row">
                <div className="col-md-6 offset-3 p-2">
                    <ol>
                        <li>Elige el producto que deseas comprar.</li>
                        <li>Selecciona la cantidad de unidades a comprar del producto seleccionado.</li>
                        <li>Puedes seguir agregando otros productos al carrito seleccionando "Seguir comprando" o sino haz clic en "Terminar Compra" y repetir el proceso.</li>
                        <li>Al seleccionar "Terminar compra" o el carrito, se te redirigirá a otra página donde podrás ver los porductos que han sido colocados en el mismo. Deberás completar tus datos y hacer click en "Generar orden"</li>
                        <li>Se te redirigirá a otra página donde se confirmará la compra y podrás visualizar tu número de orden.</li>
                        <li>Cualquier duda podés comunicarte por whatsApp o teléfono al 34111223344 o al correo tienda.ajedrez@gmail.com</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <hr className="col-md-6 offset-3 mt-5" />
            </div>
        </div>
    )
}

export default ComoComprar;