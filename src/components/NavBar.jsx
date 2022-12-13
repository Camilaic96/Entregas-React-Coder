import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand d-flex flex-column align-items-center" to={"/"}>
                                <img src={"../images/logoTiendaAjedrez.png"} alt={"Logo Tienda Ajedrez"} width={80} />
                                <p><b><em>Tienda Ajedrez</em></b></p>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" > <span className="navbar-toggler-icon"></span> </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" activeclassname="active" to={"/"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false" activeclassname="active">Productos</NavLink>
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
                                        <a className="nav-link" href="#como-comprar" activeclassname="active">Cómo comprar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#quienes-somos" activeclassname="active">Quiénes somos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contacto" activeclassname="active">Contacto</a>
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
