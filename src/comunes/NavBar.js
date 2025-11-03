
import logo from "../assests/imagenes/luna-vet.webp"

export default function NavBar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#inicio">
                    <img src={logo} alt="Bootstrap" width="40" className="rounded" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" href="#galeria">Galería</a></li>
                        <li className="nav-item"><a className="nav-link" href="/login">Inicia Sesion</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Panel</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="list-group bg-dark">
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">Inicio</a>
                    <a href="/Agenda" class="list-group-item list-group-item-action list-group-item-dark">Agenda</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">Usuarios</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">Mascotas</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">Configuracion</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">Finanzas</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">historial</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">inventarios</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">medicamentos</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">reportes</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">servicios</a>
                    <a href="/" class="list-group-item list-group-item-action list-group-item-dark">sucursales</a>
                </div>
            </div>
        </div>
    </>)
}
