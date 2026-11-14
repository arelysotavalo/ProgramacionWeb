
const precioEntrada = 20;
const cuposIniciales = 50;
const descuentoEstudiante = 0.30;
const descuentoDocente = 0.15;
const descuentoPublicoGeneral = 0;
const maximoEntradas = 5;

let cuposDisponibles = cuposIniciales;
let totalEntradasVendidas = 0;
let totalIngresos = 0;
let numeroCompras = 0;
let opc;

do {
    opc = prompt(
        "--- SISTEMA INNOVA ESPE 2026 ---\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir"
    );

    switch (opc) {
        case "1": {
            let nombre = prompt("Ingresa el nombre del comprador:");
            let tipo;
            let tipoParticipante;
            let descuentoPorcentaje;

            do {
                tipo = prompt(
                    "Ingresa el tipo de participante:\n" +
                    "1 = Estudiante\n" +
                    "2 = Docente\n" +
                    "3 = Público general"
                );

                if (tipo !== "1" && tipo !== "2" && tipo !== "3") {
                    alert("Error: opción inválida.");
                }
            } while (tipo !== "1" && tipo !== "2" && tipo !== "3");

            if (tipo === "1") {
                tipoParticipante = "Estudiante";
                descuentoPorcentaje = descuentoEstudiante;
            } else if (tipo === "2") {
                tipoParticipante = "Docente";
                descuentoPorcentaje = descuentoDocente;
            } else {
                tipoParticipante = "Público general";
                descuentoPorcentaje = descuentoPublicoGeneral;
            }

            let cantidadTexto = prompt("Ingresa la cantidad de entradas (1 a 5):");
            let cantidad = Number(cantidadTexto);

            if (
                cantidadTexto === null ||
                !Number.isInteger(cantidad) ||
                cantidad < 1 ||
                cantidad > maximoEntradas
            ) {
                alert("Compra rechazada: ingresa un número entero entre 1 y 5.");
            } else if (cantidad > cuposDisponibles) {
                alert("Compra rechazada: no hay suficientes cupos disponibles.");
            } else {
                const subtotal = cantidad * precioEntrada;
                const descuento = subtotal * descuentoPorcentaje;
                const total = subtotal - descuento;

                cuposDisponibles -= cantidad;
                totalEntradasVendidas += cantidad;
                totalIngresos += total;
                numeroCompras++;

                alert(
                    "------- RESUMEN DE COMPRA -------\n" +
                    "Nombre: " + nombre + "\n" +
                    "Tipo de participante: " + tipoParticipante + "\n" +
                    "Cantidad de entradas: " + cantidad + "\n\n" +
                    "Subtotal: $" + subtotal.toFixed(2) + "\n" +
                    "Descuento (" + (descuentoPorcentaje * 100) + "%): $" +
                    descuento.toFixed(2) + "\n" +
                    "Total a pagar: $" + total.toFixed(2) + "\n\n" +
                    "Compra realizada exitosamente.\n" +
                    "Cupos restantes: " + cuposDisponibles
                );
            }

            break;
        }

        case "2": {
            let comunicado;

            if (cuposDisponibles > 10) {
                comunicado = "Cupos disponibles";
            } else if (cuposDisponibles >= 1) {
                comunicado = "Últimos cupos disponibles";
            } else {
                comunicado = "Evento agotado";
            }

            alert(
                "---- CONSULTA DE CUPOS ----\n" +
                "Cupos disponibles: " + cuposDisponibles + "\n" +
                "Disponibilidad: " + comunicado
            );

            break;
        }

        case "3":
            alert(
                "---- CONSULTA DE INGRESOS ----\n" +
                "Total de entradas vendidas: " + totalEntradasVendidas + "\n" +
                "Total de ingresos acumulados: $" + totalIngresos.toFixed(2) + "\n" +
                "Número de compras realizadas: " + numeroCompras
            );

            break;

        case "4":
            alert(
                "---- SALIENDO ----\n" 
                
            );

            break;

        default:
            alert("Error: opción de menú inexistente.");
            break;
    }
} while (opc !== "4");
