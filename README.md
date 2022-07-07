# GUIA

## Tyba Backend Engineer test

A continuacion, enumero los pasos a seguir para poder correr el test entregado.

1. Crear una base de datos con cualquier nombre (ej: tyda). Debe ser mysql
2. Dentro de la base datos importar el archivo db.sql
3. Abrir el archivo .env.local y cambiar las variable de la base de datos
4. Ahora abrir la terminal y correr npm install (Hay que tener instalado una versión estable de node js)
5. Una vez finalizado ya estaría listo para correr cualquiera de los siguientes comandos
    - npm run dev: Es para correr aplicación en desarrollo por el puerto 3000
    - npm run test: Para corer las pruebas unitarias

Ahora se crearon los siguientes endpoints:

## POST http://localhost:3000/users/signin

-   Body { “email”: “correo”, “password”: “contraseña”}

## POST http://localhost:3000/users/signup

-   Body { “email”: “correo”, “password”: “contraseña”}

## POST http://localhost:3000/users/restaurants

-   Body { "latitud": "4.7576142", "longitud": "-75.9347" }
-   Headers { “authorization”: “Token”}
