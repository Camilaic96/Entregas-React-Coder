import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid fondoGris">
            <div className="p-3 text-center">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 offset-2">
                        <h3>Contacto</h3>
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
                    <div className="col-md-4">
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6592132.668200884!2d145.02785654272182!3d-36.219696685044234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af07f2c2471d%3A0xae9095c237d10e3c!2sLondonAds!5e0!3m2!1ses-419!2sar!4v1672980477739!5m2!1ses-419!2sar"} referrerPolicy="no-referrer-when-downgrade" title="Mapa Ubicación Tienda Ajedrez" className="w-75 p-3" height={"250"} />
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