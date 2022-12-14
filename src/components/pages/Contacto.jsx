import React from "react";

const Contacto = () => {
    return (
        <div className="containar-fluid my-5 mb-5" id="contacto">
            <div className="row col-md-6 offset-3 mb-4 text-center">
                <h2 className="sombra">Contacto</h2>
            </div>
            <div className="row">
                <div className="col-md-3 offset-3">
                    <p>Celular: 3412117786</p>
                    <p>Email: tienda.ajedrez@gmail.com</p>
                    <p>Córdoba 4030, Rosario, Santa Fe, Argentina</p>
                    <div>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/facebook.svg"} alt="Facebook" width={24} /></a>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/instagram.svg"} alt="Instagram" width={24} /></a>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/twitter.svg"} alt="Twitter" width={24} /></a>
                        <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"../images/whatsapp.svg"} alt="WhatsApp" width={24} /></a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label for="formControlInputNombre" className="form-label">Nombre</label>
                        <input type="name" className="form-control" id="formControlInputNombre" placeholder="Nombre" />
                    </div>
                    <div className="mb-3">
                        <label for="formControlInputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="formControlInputEmail" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="formControlInputTelefono" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="formControlInputTelefono" placeholder="Teléfono" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;