## PASO A PASO

## 1
El primer paso para poder crear el servidor con NodeJs (Express) es inicializar los modulos de node con el comando de "npm init"

## 2
Editar el archivo package.json para alterar los comandos con los scripts y agregar el tipo de commonjs o module para poder hacer las importaciones o exportaciones.

(npm i promise-mysql)
(npm i nodemon)
(npm i express)

## 3
Se crea la carpeta src donde tendrá la estructura backend para poder ejecutar el resto de scripts

## 4 
Se crea el archivo .env que es el que tendrá las credenciales para entrar a la base de datos, también se debe hacer la instalación del dotenv ejecutando el comando (npm i dotenv)

## 4
Se crean 3 archivos llamados app.js, config.js, index.js

app.js = Es el encargado de llamar a express para darle su uso, asignación de puerto y hacer la exportación para que el archivo index.js sea el que se ejecute.

index.js = Es el encargado de llamar al app.js y ejecutar la función main() que esta llama el puerto y lo escucha en el servidor asignado.

config.js = Encargado de importar el .env para que se asigne los valores para poder conectar a la base de datos, datos como:
HOST = LOCALHOST
DATABASE = NOMBRE DE LA BASE DE DATOSZ
USER = USUARIO
PASSWORD = CONTRASEÑA DEL USUARIO DE LA BASE DE DATOS

## 5
Se crean 3 carpetas llamadas controllers, db, routes

db = Esta trae el archivo database.js que importa el promise-mysql y llama el archivo config.js, crea la conexión llamando a una función que el modulo promise-mysql dispone y es createConnection, y al importar el config.js esta crea la conexión con los datos de ese archivo.

controllers = Esta trae varios archivos dependiendo de la cantidad de información que necesite, entonces un controlador dispone a hacer la conexión a la base de datos y generar las funciones que necesite luego el enrutador.

routes = Esta trae los controladores para asignarle rutas a las funciones que ejecutan los archivos de controllers.
