import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="p-3 text-center">
                <div className="row d-flex align-items-center">                    
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
                                <ul className="lista-footer">
                                    <li><a href="/">Inicio</a></li>
                                    <li><a href="/">Productos</a></li>
                                    <li><a href="/">Cómo comprar</a></li>
                                    <li><a href="/">Quiénes somos</a></li>
                                    <li><a href="/">Contacto</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
                                <ul className="lista-footer">
                                    <li><a href="/">Tableros</a></li>
                                    <li><a href="/">Relojes</a></li>
                                    <li><a href="/">Libros</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.450420585691!2d-60.678168400000004!3d-32.9391156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aca90b435371%3A0xed34f5968a6698!2sC%C3%B3rdoba%204030%2C%20S2002%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1669512717032!5m2!1ses-419!2sar"} referrerPolicy="no-referrer-when-downgrade" title="Mapa Ubicación Tienda Ajedrez" className="w-75 p-3" height={"250"} />
                    </div>
                    <div className="col-md-4">
                        <h3>Contacto</h3>
                        <p>Celular: 3412117786</p>
                        <p>Email: tienda.ajedrez@gmail.com</p>
                        <p>Córdoba 4030, Rosario, Santa Fe, Argentina</p>
                        <div>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/facebook.svg"} alt="Facebook" width={24} /></a>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/instagram.svg"} alt="Instagram" width={24} /></a>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/twitter.svg"} alt="Twitter" width={24} /></a>
                            <a href={"/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/whatsapp.svg"} alt="WhatsApp" width={24} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row fondoAzul p-1">
                <p>COPYRIGHT TIENDA AJEDREZ - 2022. TODOS LOS DERECHOS RESERVADOS.</p>
            </div>
        </div>
    )
}

export default Footer;