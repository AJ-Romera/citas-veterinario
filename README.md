# Citas Centro Veterinario AJ

_Es una web básica donde puedes pedir cita a un centro veterinario ficticio mediante un formulario. Tras rellenar el formulario correctamente, se guarda tu cita en localStorage. Puedes cancelar la cita y pedir cuantas citas quieras._

## Índice de Contenidos

-   [Demo](#demo)
-   [Construido Con](#construido-con)
-   [Instalación](#instalacion)

## Demo 🚀

https://citas-veterinario-aj.netlify.app/

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

-   [Create React App](https://github.com/facebook/create-react-app). - Usado para crear la base del proyecto con React
-   React useState Hook - Para el estado de las citas individuales, el estado de todas las citas y el estado de error debido a que no se rellenen todos los campos del formulario
-   React useEffect Hook - Para actualizar las citas iniciales en el localStorage cada vez que cambia el estado de citas
-   localStorage - Para guardar tus citas en local. No uso una base de datos porque es una pequeña web de ejemplo
-   JavaScript ES6 - Últimos estándares de JavaScript
-   [CSS Skeleton](http://getskeleton.com/) - Un framework ligero que ayuda con el responsive, los anchos, grid, botones, etc. Es como una versión ligera de Bootstrap.
-   [uuid](https://www.npmjs.com/package/uuid) - Paquete de NPM que crea identificadores únicos universales. Muy útiles para IDs o keys.

### Instalación 🔧

_Clona o haz fork del repositorio. Abre el proyecto en tu consola y escribe el comando:_

```
npm install
```

_Te instalará las dependencias del proyecto, luego usa el comando:_

```
npm start
```

_Iniciará el proyecto en modo desarrollador en tu navegador. Se abrirá automáticamente:_

[http://localhost:3000](http://localhost:3000)

_La página se recargará si haces y guardas cambios en el código. También verás errores en la consola (si los hubiese)_
