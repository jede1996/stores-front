import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
                <div
                    className="text-center p-5 bg-white shadow-lg rounded-4 border border-2 border-success-subtle"
                    style={{ maxWidth: "600px" }}
                >
                    <div className="mb-4">
                        <i
                            className="bi bi-emoji-frown text-success"
                            style={{ fontSize: "5rem" }}
                        ></i>
                    </div>
                    <h1 className="display-4 fw-bold text-success">404</h1>
                    <h2 className="mb-3 fw-semibold text-dark">¡Guau! Página no encontrada</h2>
                    <p className="text-muted mb-4">
                        Parece que este perrito se escapó... o la página que buscas no existe 🐾.
                        Verifica la dirección o regresa al inicio para seguir cuidando a tus pacientes peludos.
                    </p>
                    <Link to="/" className="btn btn-success btn-lg px-4">
                        <i className="bi bi-house-door me-2"></i> Volver al inicio
                    </Link>
                </div>
            </div>
        </>
    )
}