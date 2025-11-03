import { useState } from 'react';
import Swal from 'sweetalert2';
import { apiRequest } from '../comunes/Peticiones';


export default function Login() {

  const [usuario, setUsuario] = useState('');
  const [contrasenna, setContrasenna] = useState('');
  const [aplicacion, setAplicacion] = useState('');


    if (localStorage.getItem("sesion") !== null) {
      window.location.replace('/Panel')
    }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest('auth/login', "POST", { usuario, contrasenna, aplicacion: aplicacion }, {});
      if (response.status === 200) {
        Swal.fire({ icon: 'success', title: 'Login exitoso', text: 'Bienvenido!' });
        localStorage.setItem("sesion", response.data.respuesta.token)
        window.location.replace('/Panel')
      } else {
        Swal.fire({ icon: 'error', title: 'Error de login', text: 'Credenciales incorrectas' });
        localStorage.removeItem("sesion")
      }
    } catch (error) {
      localStorage.removeItem("sesion")
      Swal.fire({ icon: 'error', title: 'Error de login', text: 'Credenciales incorrectas' });
    }
  };


  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 bg-dark text-white`}>
      <div className="p-4 rounded shadow" style={{ width: '300px', backgroundColor: '#333' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={contrasenna}
              onChange={(e) => setContrasenna(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Aplicacion</label>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setAplicacion(e.target.value)}>
              <option selected>Selecionar</option>
              <option value="LunaVet">Luna Vet</option>
              <option value="SafariVet">Safari Vet</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
      </div>
    </div>
  );
};
