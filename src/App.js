import React, { useState } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {
    // Arreglo de citas
    const [citas, setCitas] = useState([]);

    // Función que toma las citas actuales y añade una nueva
    const crearCita = (cita) => {
        setCitas([...citas, cita]);
    };

    return (
        <div className='App'>
            <h1>Administrador de Pacientes</h1>

            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className='one-half column'>
                        <h2>Administra tus citas</h2>
                        {citas.map((cita) => (
                            <Cita key={cita.id} cita={cita} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
