import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand d-flex flex-column align-items-center" href="/">
                                <img src={"./images/logoTiendaAjedrez.png"} alt={"Logo Tienda Ajedrez"} width={80} />
                                <p><b><em>Tienda Ajedrez</em></b></p>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" > <span className="navbar-toggler-icon"></span> </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">Inicio</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/productos" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="/productos#tableros">Tableros</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/productos#relojes">Relojes</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/productos#libros">Libros</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/como-comprar">Cómo comprar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/quienes-somos">Quiénes somos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contacto">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>

    );
};

export default NavBar;
