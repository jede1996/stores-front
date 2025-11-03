import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="bg-dark text-light">

      {/* HERO */}
      <section id="inicio" className="vh-100 d-flex align-items-center text-center bg-secondary bg-gradient">
        <div className="container">
          <h1 className="display-4 fw-bold">Cuidamos a tus mascotas con amor</h1>
          <p className="lead mb-4">
            Veterinaria integral con atención profesional y personalizada.
          </p>
          <a href="#contacto" className="btn btn-primary btn-lg">
            Agenda una cita
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="mb-4">Nuestros Servicios</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <i className="bi bi-stethoscope display-4 text-primary"></i>
                  <h5 className="mt-3">Consultas Generales</h5>
                  <p>Diagnóstico y tratamiento con médicos veterinarios certificados.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <i className="bi bi-scissors display-4 text-primary"></i>
                  <h5 className="mt-3">Estética y Baño</h5>
                  <p>Baños, cortes de pelo y limpieza dental para tus mascotas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <i className="bi bi-syringe display-4 text-primary"></i>
                  <h5 className="mt-3">Vacunación y Cirugías</h5>
                  <p>Servicios quirúrgicos y preventivos con tecnología moderna.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-5 bg-secondary bg-opacity-75 text-center">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <p className="lead mt-3">
            Somos un equipo apasionado por la salud y bienestar animal.  
            Con más de 10 años de experiencia, ofrecemos atención integral y personalizada.
          </p>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-5 bg-dark">
        <div className="container">
          <h2 className="text-center mb-4">Galería</h2>
          <div className="row g-3">
            {[
              "https://images.unsplash.com/photo-1558944351-c4a1f51d93f6",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9",
              "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
            ].map((src, idx) => (
              <div className="col-md-4" key={idx}>
                <img
                  src={src}
                  className="img-fluid rounded shadow"
                  alt={`galeria-${idx}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-5 bg-secondary text-center">
        <div className="container">
          <h2 className="mb-4">Testimonios</h2>
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p>“Excelente atención, mi perro salió feliz y saludable.”</p>
                  <footer className="blockquote-footer text-light">María López</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>“Personal muy profesional y amable. 100% recomendado.”</p>
                  <footer className="blockquote-footer text-light">Carlos Ramírez</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>“Atención rápida, confiable y con mucho cariño hacia los animales.”</p>
                  <footer className="blockquote-footer text-light">Ana Torres</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary py-4 text-center">
        <div className="container">
          <p className="mb-2">&copy; 2025 Veterinaria Patitas Felices. Todos los derechos reservados.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/" className="text-light"><i className="bi bi-facebook"></i></a>
            <a href="/" className="text-light"><i className="bi bi-instagram"></i></a>
            <a href="/" className="text-light"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
