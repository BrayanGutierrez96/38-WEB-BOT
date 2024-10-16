const usuario = JSON.parse(localStorage.getItem("usuario")); //Me permite Obtener un dato desde el localStorage
const divUsuario = document.querySelector("#usuario");

divUsuario.innerHTML = `
        <div id="nombre">Nombre: ${usuario.nombre} </div>
        <div id="apellido">Apellido: ${usuario.apellido} </div>
        <div id="edad">Edad: ${usuario.edad} </div>
        <div id="email">Email: ${usuario.email} </div>
        <div id="password">Password: ${usuario.contrasena} </div>
`;
