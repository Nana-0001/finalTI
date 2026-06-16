# TeenNews — Portal de Noticias

*Proyecto Final — Taller de Internet*
*Grupo 2*

---

# Integrantes

* Sofía Brunelli
* Candela Cambiaso
* Ana Gómez
* Mailén Pochettino del Puerto
* Ornella Quintanilla

---

# Descripción del Proyecto

TeenNews es un portal de noticias orientado a adolescentes desarrollado utilizando *HTML, CSS y JavaScript Vanilla*, sin frameworks externos.

El sitio permite visualizar noticias, realizar búsquedas, consultar la cotización actual del dólar, alternar entre modo claro y oscuro y administrar el contenido mediante un panel exclusivo para administradores.

La aplicación implementa almacenamiento local mediante *LocalStorage, gestión de sesiones utilizando **SessionStorage* y consumo de APIs externas mediante *Fetch API*.

---

# Funcionalidades Implementadas

## Home de Noticias

* Visualización de noticias publicadas.
* Buscador de noticias por título o descripción.
* Diseño adaptado para una navegación simple e intuitiva.
* Modo oscuro persistente.
* Visualización de cotización del dólar oficial y dólar blue en tiempo real.

## Panel de Administración

* Acceso restringido mediante autenticación.
* Creación de noticias.
* Modificación de noticias existentes.
* Eliminación de noticias.
* Persistencia de datos mediante LocalStorage.

## Gestión de Sesión

* Validación de identidad utilizando la API DummyJSON.
* Control de acceso al panel administrativo.
* Persistencia de sesión mientras el navegador permanece abierto.
* Eliminación automática de credenciales al cerrar el navegador.

---

# Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla
* LocalStorage
* SessionStorage
* Fetch API
* Git
* GitHub
* GitHub Pages

---

# Estructura del Proyecto

text
grupo2/
│
├── index.html
├── login.html
├── admin.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   ├── script.js
│   ├── login.js
│   └── admin.js
│
└── assets/
    └── BrightKenly.ttf


---

# Cómo Ejecutar el Proyecto

## Clonar el repositorio

bash
git clone https://github.com/maipochettino/grupo2.git


## Abrir el proyecto

Abrir el archivo:

text
index.html


en cualquier navegador moderno.

No requiere instalación de dependencias ni configuración adicional.

---

# Credenciales de Administrador

Para acceder al panel administrativo utilizar las credenciales de prueba proporcionadas por DummyJSON:

*Usuario:*

text
emilys


*Contraseña:*

text
emilyspass


---

# APIs Utilizadas

## DummyJSON

Utilizada para la autenticación del administrador mediante solicitudes HTTP POST.

Endpoint utilizado:

text
https://dummyjson.com/auth/login


## Bluelytics

Utilizada para obtener la cotización actual del dólar oficial y dólar blue.

Endpoint utilizado:

text
https://api.bluelytics.com.ar/v2/latest


---

# Publicación del Proyecto

## Repositorio GitHub

https://github.com/maipochettino/grupo2

## GitHub Pages

https://maipochettino.github.io/grupo2/

---

# Conceptos Aplicados

Durante el desarrollo del proyecto se trabajó con:

* Manipulación del DOM.
* Eventos y Event Listeners.
* CRUD (Create, Read, Update, Delete).
* Almacenamiento local con LocalStorage.
* Gestión de sesión con SessionStorage.
* Objetos y Arrays en JavaScript.
* JSON.parse() y JSON.stringify().
* Programación asíncrona con async/await.
* Consumo de APIs mediante fetch().
* Control de errores mediante try/catch.
* Trabajo colaborativo utilizando Git y GitHub.

---

# Observaciones

Este proyecto fue desarrollado con fines académicos para la materia Taller de Internet.

Las noticias y configuraciones se almacenan localmente en el navegador del usuario, por lo que los datos pueden variar entre distintos dispositivos o navegadores.
