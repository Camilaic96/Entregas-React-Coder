import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid fixed-top bg-white shadow-sm">
            <div className="row">
                <div className="col-md-6 offset-2">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand d-flex flex-column align-items-center" to={"/"}>
                                <img src={"../images/logoTiendaAjedrez.png"} alt={"Logo Tienda Ajedrez"} width={64} />
                                <p className="fs-6"><b><em>Tienda Ajedrez</em></b></p>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" > <span className="navbar-toggler-icon"></span> </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" activeclassname="active" to={"/"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/category/tablero"}>Tableros</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item" to={"/category/reloj"}>Relojes</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item" to={"/category/libro"}>Libros</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" activeclassname="active" to={"/como-comprar"}>Cómo comprar</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" activeclassname="active" to={"/quienes-somos"}>Quiénes somos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" activeclassname="active" to={"/contacto"}>Contacto</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end"><CartWidget /></div>
            </div>
        </div>

    );
};

export default NavBar;
