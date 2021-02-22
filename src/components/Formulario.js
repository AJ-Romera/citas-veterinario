import React, { useState } from 'react';

function Formulario() {
    // Crear State de las citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    // Función que se ejecuta cada vez que un usuario escribe en un input
    const handleChange = () => {
        console.log('No escribas encima mia hijo de p....');
    };

    return (
        <div className='formulario'>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={handleChange}
                />

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota'
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleChange}
                />

                <label>Síntomas</label>
                <textarea
                    name='sintomas'
                    className='u-full-width'
                    onChange={handleChange}
                ></textarea>

                <button type='submit' className='u-full-width button-primary'>
                    Agregar Cita
                </button>
            </form>
        </div>
    );
}

export default Formulario;
