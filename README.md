# Desafío Frontend: Aplicación de Monitoreo

Este es un proyecto de frontend para una aplicación de monitoreo, desarrollado como parte de un desafío de desarrollo frontend. La aplicación permite a los usuarios registrarse, iniciar sesión y acceder a un dashboard con información dinámica.

## Tecnologías utilizadas

- **Angular**: Framework principal para la construcción de la aplicación.
- **TailwindCSS**: Utilizado para el diseño responsivo y estilización.

## Funcionalidades

### Pantalla de Login/Registro

#### Registro de usuario
- Los usuarios pueden registrarse proporcionando la información necesaria.
- La información se almacena correctamente (en este caso solo front-end, no se implementa el almacenamiento real, pero se simula).

#### Inicio de sesión
- Los usuarios pueden iniciar sesión con las credenciales registradas.
- En caso de éxito, son redirigidos al **Dashboard**.
- Se utiliza un **Guard** de Angular para proteger las rutas y asegurar que solo los usuarios autenticados puedan acceder al dashboard.

### Pantalla de Dashboard

#### Sección de Tarjetas Dinámicas
- Se renderizan tarjetas dinámicas con información obtenida desde una API o archivos JSON.

#### Tabla con información del backend
- La tabla muestra datos provenientes del backend o archivos JSON.
- Permite acciones como ordenar, filtrar o buscar la información (dependiendo de los datos disponibles).

### Navegación y Diseño

#### Navbar y Sidenav
- El **Navbar** muestra la información del usuario logueado, como nombre y avatar.
- El **Sidenav** contiene enlaces funcionales a las diferentes secciones del dashboard.

#### Diseño Responsivo
- La aplicación está completamente funcional en dispositivos móviles, tablets y escritorios.
- Se utiliza **TailwindCSS** para lograr un diseño atractivo y responsivo.

## Seguridad y Validaciones

### Seguridad en la autenticación
- Se maneja correctamente la sesión de los usuarios para evitar accesos no autorizados.

### Validaciones de formularios
- Se realizan validaciones adecuadas en los formularios de **registro** y **login** para prevenir datos incorrectos o maliciosos.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JesyGomez/MonitoreoDashboard.git
