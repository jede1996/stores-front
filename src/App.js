
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App () {

  

  const [usuario, setUsuario] = useState('');
  const [contrasenna, setContrasenna] = useState('');
  const [modoOscuro, setModoOscuro] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/store/v1/auth/login', {
        usuario,
        contrasenna,
        aplicacion: 'LunaVet' // Este campo se envía pero no se muestra
      });
      if(response.status === 200){
        Swal.fire({ icon: 'success', title: 'Login exitoso', text: 'Bienvenido!' });
        localStorage.setItem("sesion", response.data.respuesta.token)
      }else{
        Swal.fire({ icon: 'error', title: 'Error de login', text: 'Credenciales incorrectas'});
        localStorage.removeItem("sesion")
      }
    } catch (error) {
      localStorage.removeItem("sesion")
      Swal.fire({ icon: 'error', title: 'Error de login', text: 'Credenciales incorrectas'});
    }
  };
  const toggleModo = () => setModoOscuro(!modoOscuro);

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${modoOscuro ? 'bg-dark text-white' : 'bg-light'}`}>
      <div className="p-4 rounded shadow" style={{ width: '300px', backgroundColor: modoOscuro ? '#333' : '#fff' }}>
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
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>

          <div class="form-check form-switch mt-3">
            <input class="form-check-input" type="checkbox" id="modoOscuro" onClick={toggleModo}/>
            <label class="form-check-label" for="modoOscuro">Cambiar a modo {modoOscuro ? 'claro' : 'oscuro'}</label>
          </div>
      </div>
    </div>
  );
};
