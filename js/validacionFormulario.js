// VALIDAR FORMULARIO CON AVISOS "ALERT"            
            //Creamos la funcion para validar los datos del formulario       
            // Creamos un alert y salida de consola de que el formulario se está enviando
      
            function enviarFormulario() {
                console.log('Enviando formulario...')
                alert ('Enviando formulario')
                
            // Creamos un bucle if para que aparezca un alert con los campos no introducidos en el formulario o nulos        
             
                if(nombreInput.value === null || nombreInput.value === '') {
                    alert('Ingresa tu nombre')
                }

                if(apellidosInput.value === null || apellidosInput.value === '') {
                    alert('Ingresa tu apellido')
                }

                if(dniInput.value === null || dniInput.value === '') {
                    alert('Ingresa tu DNI')
                }

                if(nacimientoInput.value === null || nacimientoInput.value === '') {
                    alert('Ingresa tu fecha de nacimiento')
                }

                if(telefonoInput.value === null || telefonoInput.value === '') {
                    alert('Ingresa tu número de teléfono')
                }

                if(emailInput.value === null || emailInput.value === '') {
                    alert('Ingresa tu dirección de email')
                }
                return false;       
                
                // registrar datos del formilario como variables
                var user = document.getElementById("nombreInput").value;               
            }