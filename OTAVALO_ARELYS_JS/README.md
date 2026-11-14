# SISTEMA INNOVA ESPE 2026

## 1. Introducción

El presente proyecto consiste en el desarrollo de un prototipo de un sistema de venta de entradas para el evento ficticio **Innova ESPE 2026**, organizado por la Universidad de las Fuerzas Armadas – ESPE.

El sistema permite gestionar la compra de entradas, aplicar descuentos según el tipo de participante, controlar los cupos disponibles y consultar los ingresos acumulados.

La solución se desarrolla utilizando JavaScript nativo, aplicando conceptos fundamentales de programación como variables, constantes, operadores, estructuras condicionales y ciclos.

## 2. Estructura del proyecto

La organización de los archivos es la siguiente:

```text
Sistema_Innova_ESPE/
│
├── index.html
├── app.js
└── README.md
```

**Descripción de los archivos:**

- `index.html`: documento HTML encargado de cargar el archivo JavaScript.
- `app.js`: contiene la lógica del sistema, las validaciones, los cálculos y el menú principal.
- `README.md`: documentación general del proyecto.

## 3. Funcionalidades principales

El sistema implementa las siguientes funcionalidades:

- **Compra de entradas:** permite registrar el nombre del comprador, seleccionar el tipo de participante y establecer la cantidad de entradas.
- **Aplicación de descuentos:** calcula automáticamente los descuentos correspondientes a estudiantes, docentes y público general.
- **Control de cupos:** actualiza la disponibilidad después de cada compra exitosa.
- **Consulta de ingresos:** muestra el total de entradas vendidas, los ingresos acumulados y el número de compras realizadas.
- **Resumen final:** presenta los resultados generales al finalizar la ejecución.

## 4. Tecnologías utilizadas

- **HTML5:** estructura básica para ejecutar el sistema.
- **JavaScript nativo:** implementación de la lógica y funcionalidades del programa.

## 5. Consideraciones de implementación

- Se utilizan `const` y `let` para la declaración de constantes y variables.
- Se implementa un menú interactivo mediante un ciclo `do...while`.
- Se utiliza la estructura `switch` para gestionar las opciones del menú.
- Se emplean `prompt()` para solicitar información y `alert()` para mostrar resultados y mensajes.
- Se realizan validaciones para evitar compras con cantidades inválidas o superiores a los cupos disponibles.
- Los cupos, ingresos y contadores únicamente se actualizan cuando una compra es válida.
- El sistema no requiere conexión a bases de datos ni bibliotecas externas.

## 6. Ejecución del proyecto

1. Descargar o clonar el proyecto.
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo `index.html` en un navegador web.
4. Interactuar con el sistema mediante las ventanas de diálogo (`prompt()` y `alert()`).

---

**Proyecto académico – Innova ESPE 2026**

Universidad de las Fuerzas Armadas – ESPE.