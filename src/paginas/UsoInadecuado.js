export default function UsoInadecuado() {
    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
                <div className="text-center p-5 border rounded shadow bg-white">
                    <h1 className="text-danger mb-3">⚠ Uso indebido detectado</h1>
                    <p className="lead">
                        Hemos detectado un acceso no autorizado o un mal uso de esta página.
                    </p>
                    <p>Por seguridad, todos los datos locales han sido eliminados.</p>
                </div>
            </div>
        </>
    )
}