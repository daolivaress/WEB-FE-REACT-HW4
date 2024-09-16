
# Landing Page - Planificación Estratégica Logitech G Pro Superlight

Este proyecto consiste en una landing page desarrollada en **React.js** con **Vite** para presentar la planificación estratégica de la venta del mouse **Logitech G Pro Superlight**. La página incluye varias secciones, como una introducción, un análisis DOFA dinámico, una descripción de la identidad organizacional y una tabla de objetivos estratégicos, todo diseñado utilizando **Tailwind CSS**.

## Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

## Características

- **Responsivo**: La página se adapta a diferentes tamaños de pantalla.
- **Análisis DOFA dinámico**: Muestra las fortalezas, debilidades, oportunidades y amenazas del producto de manera dinámica a partir de un array de datos.
- **Tabla dinámica de objetivos estratégicos**: Muestra objetivos estratégicos con estados calculados dinámicamente basados en el porcentaje de cumplimiento.
- **Despliegue en GitHub Pages**: La página está disponible en línea a través de GitHub Pages.

## Instalación

Para ejecutar el proyecto de forma local, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en tu navegador en `http://localhost:5173`.

## Uso

La landing page está compuesta por las siguientes secciones:

1. **Header**: Un encabezado personalizable que incluye la navegación principal.
2. **Introducción**: Resumen de la planificación estratégica del mouse Logitech G Pro Superlight.
3. **Diagnóstico Actual (DOFA)**: Sección dinámica que muestra las fortalezas, debilidades, oportunidades y amenazas del producto.
4. **Identidad Organizacional**: Información sobre la misión, visión y políticas corporativas.
5. **Objetivos Estratégicos**: Tabla dinámica con objetivos estratégicos, mostrando el progreso y el estado de cada uno.
6. **Footer**: Pie de página personalizable con cualquier contenido adicional.

## Estructura del Proyecto

El proyecto sigue una estructura sencilla y clara:

```bash
├── src
│   ├── components
│   │   ├── main-components
│   │   │   ├── Actual_diagnostic.jsx
│   │   │   ├── Introduction.jsx
│   │   │   ├── Organizational_identity.jsx
│   │   │   ├── Strategic_objectives.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── README.md
├── tailwind.config.js
├── package.json
└── vite.config.js
```

- Los componentes de React están en la carpeta `components`.
- Los archivos principales de configuración (`vite.config.js` y `tailwind.config.js`) se encuentran en la raíz del proyecto.

## Despliegue

Este proyecto se despliega utilizando **GitHub Pages**. Para desplegar tu propia versión, sigue estos pasos:

1. Crea un repositorio público en GitHub y sube tu código.
2. Configura las GitHub Actions para que ejecuten `npm run build` y desplieguen el contenido de la carpeta `dist` en GitHub Pages.
3. Una vez desplegado, tu página estará disponible en `https://tu-usuario.github.io/tu-repositorio`.

## Tecnologías Utilizadas

- **React.js**: Librería para construir interfaces de usuario.
- **Vite**: Herramienta rápida de desarrollo para proyectos React.
- **Tailwind CSS**: Framework de utilidades CSS para diseñar de manera rápida y responsiva.
- **GitHub Pages**: Plataforma de GitHub para desplegar páginas web estáticas.

## Autor

- **Daniel Olivares**
- [GitHub](https://github.com/daolivaress)
