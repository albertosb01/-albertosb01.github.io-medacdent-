// ENVIAR DATOS A TABLA
           // creamos una constante para el formulario
           const form = document.getElementById("formularioCitas");

           // agregamos una escucha de eventos asociado al botón submit, que ejecuta la función (event)
           form.addEventListener("submit", function(event) {

            // cancela el evento en el navegador para no recargar la página
            event.preventDefault();

            // objeto que contiene los datos del formulario e insertar filas en el formulario
            let datosFormulario = new FormData(form);
            insertarFilaTablaFormulario(datosFormulario)
           })        

        // Creamos una función para insertar las filas en la tabla del formulario
        function insertarFilaTablaFormulario(datosFormulario) {
        // seleccionamos la tabla para añadir los datos, con el Ref para guardar referencia a ese trozo de código
            let tablaCitaRef = document.getElementById("tablaCita");

            // creamos método para insertar filas de la tabla y le indicamos la posición en la que se va a agregar
            // si indicamos (-1)  la agrega directamente en la última fila
            let agregarFilaRef = tablaCitaRef.insertRow(-1);

            // creamos método para insertar columnas desde la posicion 0 a 7
            let agregarColumnaRef = agregarFilaRef.insertCell(0);
            agregarColumnaRef.textContent = datosFormulario.get("nombreInput")

            agregarColumnaRef = agregarFilaRef.insertCell(1);
            agregarColumnaRef.textContent = datosFormulario.get("apellidosInput")

            agregarColumnaRef = agregarFilaRef.insertCell(2);
            agregarColumnaRef.textContent = datosFormulario.get("dniInput")

            agregarColumnaRef = agregarFilaRef.insertCell(3);
            agregarColumnaRef.textContent = datosFormulario.get("nacimientoInput")

            agregarColumnaRef = agregarFilaRef.insertCell(4);
            agregarColumnaRef.textContent = datosFormulario.get("telefonoInput")

            agregarColumnaRef = agregarFilaRef.insertCell(5);
            agregarColumnaRef.textContent = datosFormulario.get("emailInput")

            agregarColumnaRef = agregarFilaRef.insertCell(6);
            agregarColumnaRef.textContent = datosFormulario.get("comentariosInput")
} 