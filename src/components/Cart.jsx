import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart , removeItem, clear, sumTotal, cartTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-primary" role="alert">No se encontraron productos en el carrito!</div>
                        <Link to={"/"} className="btn botones">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn btn-primary" title="Vaciar carrito">Vaciar carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={64} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.price}</td>
                                    <td className="text-end align-middle"><Link onClick={() => {removeItem(item.id)}} title="Eliminar producto"><img src={"images/trash.svg"} alt={"Eliminar producto"} width={24} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center align-middle"><b>Suma Total</b></td>
                                <td className="text-center align-middle">${sumTotal()}</td>
                                <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-primary" title="Finalizar compra">Finalizar compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;