import React, { useContext, useState }  from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name: nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.name, price:item.price, quantity:item.quantity, price_total:item.quantity * item.price})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        })
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>

                        <button type="button" className="btn botones" onClick={generarOrden}>Generar orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={64} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end align-middle">Total a Pagar</td>
                                <td className="text-center align-middle"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-primary" role="alert">
                        <h1>Felicitaciones!</h1>
                        <p>Tu número de orden es: {orderId}</p>
                    </div> : "" }
                </div>
            </div>
        </div>
    )
}

export default Checkout;