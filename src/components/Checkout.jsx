import React, { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, sumTotal, cartTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    
    const validarForm = (nombre, email, telefono) => {
        let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        return (nombre !== "" && validEmail.test(email) && telefono !== "")
    }

    const generarOrden = () => {
        if (validarForm(nombre, email, telefono)) {
            const fecha = new Date();
            const order = {
                buyer: { name: nombre, email: email, phone: telefono },
                items: cart.map((item) => ({id: item.id, title: item.name, price: item.price, quantity: item.quantity, price_total: item.quantity * item.price})),
                date: `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
                total: sumTotal(),
                quantity: cartTotal()
            };

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then((snapShot) => {
                setOrderId(snapShot.id);
                clear();
            });
        } else {
            console.log("Faltan datos")
        }
        
    };

    return (
        <div className="container">
            <div className="row my-5 mt-5 pt-5">
                <div className="col mt-5 pt-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => { setNombre(e.target.value) }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su Email" onInput= {(e) => { setEmail(e.target.value) }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} required />
                        </div>
                        <button type="button" className="btn botones" onClick={generarOrden} >Generar orden</button>
                    </form>
                </div>
                <div className="col mt-5 pt-5">
                    <table className="table">
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={64} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end align-middle">
                                    Total a Pagar
                                </td>
                                <td className="text-center align-middle">
                                    <b>${sumTotal()}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/thankyou/" + orderId} /> : "Faltan datos"}
                </div>
            </div>
        </div>
    );
};

export default Checkout;