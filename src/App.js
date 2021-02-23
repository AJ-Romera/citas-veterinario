import React, { useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {
    // Arreglo de citas
    const [citas, setCitas] = useState([]);

    // useEffect para realizar operaciones cuando el state cambia
    useEffect(() => {
        console.log('Documento listo o cambio en el state de citas');
    }, [citas]);

    // Función que toma las citas actuales y añade una nueva
    const crearCita = (cita) => {
        setCitas([...citas, cita]);
    };

    // Función que elimina una cita por su id
    const eliminarCita = (id) => {
        const nuevasCitas = citas.filter((cita) => cita.id !== id);
        setCitas(nuevasCitas);
    };

    // Mensaje condicional según si no hay citas o si las hay
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

    return (
        <div className='App'>
            <h1>Administrador de Pacientes</h1>

            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className='one-half column'>
                        <h2>{titulo}</h2>
                        {citas.map((cita) => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
