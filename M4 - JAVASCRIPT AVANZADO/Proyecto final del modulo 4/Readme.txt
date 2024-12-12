DEVF Dogs API 🐶🐾

Bienvenido a la guía para interactuar con la API de Perros 🐶🐶🐶. Este proyecto ha sido diseñado para practicar operaciones CRUD utilizando JavaScript puro (Vanilla JS) y la API Fetch. Aquí aprenderás a manejar datos de perros como obtener, crear, actualizar, eliminar, y buscar un solo perro. ¡Manos a la obra! 🚀

URL Base de la API

https://sample-dogs-api.netlify.app/api/v1/

🐾 Funcionalidades

1. Obtener Todos los Perros 🐕

Esta funcionalidad permite recuperar una lista de todos los perros almacenados en la base de datos.

Método: GET

Path: /dogs

📌 Qué aprenderás:

Cómo realizar una petición GET con fetch.

Mostrar los datos en una página web de forma dinámica.

2. Crear un Nuevo Perro 🐾

Puedes agregar un nuevo perro al sistema utilizando un formulario interactivo.

Método: POST

Path: /dogs

Datos Requeridos:

{
    "name": "Pepe",
    "breed": "Fox Terrier",
    "image": "<URL de imagen>",
    "color": "Café y Negro", // Opcional
    "age": 3,                 // Opcional
    "favoriteToy": "Peluche", // Opcional
    "personality": "Juguetón", // Opcional
    "bio": "A Pepe le gusta jugar mucho con su peluche" // Opcional
}

📌 Qué aprenderás:

Capturar datos desde un formulario.

Enviar datos en formato JSON usando fetch.

3. Actualizar un Perro ✏️🐶

Permite modificar información de un perro existente utilizando su ID.

Método: PUT

Path: /dogs/:dogid

Datos Modificables:

{
    "name": "Nuevo Nombre", // Opcional
    "breed": "Nueva Raza", // Opcional
    "image": "<URL de imagen>",
    "color": "Nuevo Color",
    "age": 5,                
    "favoriteToy": "Nueva Juguete",
    "personality": "Tranquilo",
    "bio": "Nuevo Bio"
}

📌 Qué aprenderás:

Cómo trabajar con rutas dinámicas en una API.

Usar un formulario para editar datos existentes.

4. Eliminar un Perro 💀🐕

Permite eliminar un perro específico utilizando su ID.

Método: DELETE

Path: /dogs/:dogid

📌 Qué aprenderás:

Manejar operaciones de eliminación con fetch.

Actualizar la interfaz para reflejar cambios en tiempo real.

5. Obtener un Solo Perro 🐶

Permite buscar la información detallada de un perro específico utilizando su ID.

Método: GET

Path: /dogs/:dogid

📌 Qué aprenderás:

Cómo trabajar con parámetros dinámicos en las URLs.

Mostrar datos específicos en un modal o una nueva vista.

🌟 Puntos Extra

Añade validación de datos en los formularios para evitar errores.

Agrega un diseño atractivo utilizando CSS.