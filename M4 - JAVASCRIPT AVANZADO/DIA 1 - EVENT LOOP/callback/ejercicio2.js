function registrarUsuario(usuario, callback) { 
    if (usuario.nombre && usuario.email) { 
        // Simula un registro exitoso 
        setTimeout(() => { 
            callback(null, "Registro exitoso");
         }, 1000); // Simula un retraso en la base de datos 
        } else { 
            // Devuelve un error si falta el nombre o el email 
            setTimeout(() => { 
                callback(new Error("Faltan datos: nombre y email son requeridos")); 
            }, 1000); // Simula un retraso en la base de datos 
        } 
    }

document.getElementById('registroForm').addEventListener('submit', function(event) { 
    event.preventDefault();
    const nombre = document.getElementById('nombre').value; 
    const email = document.getElementById('email').value; 
    const usuario = { nombre: nombre, email: email }; 

    registrarUsuario(usuario, (error, mensaje) => {
        const mensajeElemento = document.getElementById('mensaje'); 
        if (error) { 
            mensajeElemento.textContent = error.message; 
            mensajeElemento.style.color = 'red';
        } else { 
            mensajeElemento.textContent = mensaje; 
            mensajeElemento.style.color = 'green';
        } 
    }); 
});