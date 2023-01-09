import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [consulta, setConsulta] = useState("");
    const [contactId, setContactId] = useState("");
    const [mensaje, setMensaje] = useState(false);

    const validarForm = (nombre, email, telefono, consulta) => {
        let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        return (nombre !== "" && validEmail.test(email) && telefono !== "")
    }

    const generarContacto = () => {
        setMensaje(true);
        if (validarForm(nombre, email, telefono, consulta)) {
            const fecha = new Date();
            const contact = {
                buyer: { name: nombre, email: email, phone: telefono},
                query: {consulta},
                date: `${fecha.getDate()}-${fecha.getMonth() + 1
                    }-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            };
    
            const db = getFirestore();
            const contactsCollection = collection(db, "contacts");
            addDoc(contactsCollection, contact).then((snapShot) => {
                setContactId(snapShot.id);
            });
        }
    };

    return (
        <div className="container-fluid my-5 mb-5 mt-5 pt-5" id="contacto">
            <div className="row col-md-6 offset-3 mb-4 mt-5 pt-5">
                <h2 className="sombra">Contacto</h2>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-md-3 offset-3 pb-5 mb-5">
                    <p>Celular: 34111223344</p>
                    <p>Email: tienda.ajedrez@gmail.com</p>
                    <p>P. Sherman calle Wallaby 42, Sydney</p>
                    <div>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/facebook.svg"} alt="Facebook" width={24} /></a>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/instagram.svg"} alt="Instagram" width={24} /></a>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/twitter.svg"} alt="Twitter" width={24} /></a>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/whatsapp.svg"} alt="WhatsApp" width={24} /></a>
                    </div>
                </div>
                <form className="col-md-3">
                    <div className="mb-3">
                        <label htmlFor="formControlInputNombre" className="form-label">Nombre</label>
                        <input type="name" className="form-control" id="formControlInputNombre" placeholder="Nombre" onInput={(e) => { setNombre(e.target.value) }} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formControlInputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="formControlInputEmail" placeholder="name@example.com" onInput= {(e) => { setEmail(e.target.value) }} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formControlInputTelefono" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="formControlInputTelefono" placeholder="Teléfono" onInput={(e) => { setTelefono(e.target.value) }} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => { setConsulta(e.target.value) }} required />
                    </div>
                    <div className="d-flex">
                        <button type="button" className="btn btn-secondary botones fs-6 me-3" onClick={generarContacto} >Enviar consulta</button>
                        {mensaje ? (contactId ? <Navigate to={"/mensaje- enviado"} /> : <div className="fs-6 ms-3 text-danger pt-2">Completar todos los campos</div>) : "" }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto;