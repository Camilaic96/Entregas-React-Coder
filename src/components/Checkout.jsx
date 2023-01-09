import React, { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, sumTotal, cartTotal } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [emailRepetido, setEmailRepetido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [mensaje, setMensaje] = useState(false);
    
    const validarForm = (nombre, apellido, email, emailRepetido, telefono) => {
        let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        return (nombre !== "" && apellido !=="" && validEmail.test(email) && emailRepetido === email && telefono !== "")
    }

    const generarOrden = () => {
        setMensaje(true);
        if (validarForm(nombre, apellido, email, emailRepetido, telefono)) {
            const fecha = new Date();
            const order = {
                buyer: { name: nombre, lastName: apellido, email: email, phone: telefono },
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
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="apellido" placeholder="Ingrese su Apellido" onInput={(e) => { setApellido(e.target.value) }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su Email" onInput= {(e) => { setEmail(e.target.value) }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailRepetido" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" id="emailRepetido" placeholder="Repita su Email" onInput= {(e) => { setEmailRepetido(e.target.value) }} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} required />
                        </div>
                        <div className="d-flex">
                            <button type="button" className="btn botones" onClick={generarOrden} >Generar orden</button>
                            {mensaje ? (orderId ? <Navigate to={"/thankyou/" + orderId} /> : <div className="fs-6 ms-5 text-danger pt-2">Completar todos los campos</div>) : "" }
                        </div>
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
                                <td colSpan={3} className="text-end align-middle">Total a Pagar</td>
                                <td className="text-center align-middle"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;