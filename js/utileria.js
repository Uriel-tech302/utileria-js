/**
 * Valida el formato de un correo electrónico.
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * Valida que el texto contenga únicamente letras.
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * Valida si el longitud de un número (o texto) no excede un límite.
 */
function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}

/**
 * Calcula la edad exacta basada en la fecha de nacimiento.
 */
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();
    
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}

/**
 * Determina si una persona es mayor de edad
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida que un password tenga al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}


// FUNCIONES ADICIONALES

/**
 * Calcula el Índice de Masa Corporal (IMC).
 */
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}
/**
 * Calcula el precio final después de aplicar un porcentaje de descuento.
 */
function calcularDescuento(precioBase, porcentajeDescuento) {
    if (porcentajeDescuento < 0 || porcentajeDescuento > 100) return precioBase;
    const descuento = (precioBase * porcentajeDescuento) / 100;
    return precioBase - descuento;
}