import React, { useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {
    // Citas en local storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
        citasIniciales = [];
    }

    // Arreglo de citas
    const [citas, setCitas] = useState(citasIniciales);

    // useEffect para realizar operaciones cuando el state cambia
    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));

        if (citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas));
        } else {
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas]);

    // Función que toma las citas actuales y añade una nueva
    const crearCita = (cita) => {
        setCitas([...citas, cita]);
        alert(
            `${cita.propietario} su cita se ha registrado satisfactoriamente. Si se trata de una urgencia, recuerde usar nuestro servicio de urgencias en el centro o a domicilio, recuerde llevar su mascarilla. Gracias.`
        );
    };

    // Función que elimina una cita por su id
    const eliminarCita = (id) => {
        const nuevasCitas = citas.filter((cita) => cita.id !== id);
        setCitas(nuevasCitas);
        alert('Su cita ha sido cancelada');
    };

    // Mensaje condicional según si no hay citas o si las hay
    const titulo = citas.length === 0 ? '' : 'Tus citas';

    return (
        <div className='App'>
            <h1>Citas Centro Veterinario AJ</h1>

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
