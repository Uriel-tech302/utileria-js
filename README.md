# Actividad 2 - Utilería JS

## Portada

**Nombre:** Uriel Espinoza de la Rosa

**Proyecto:** Utilería JS

## ¿Qué problema resuelve?

Esta librería JavaScript permite validar datos comunes dentro de formularios web sin depender de frameworks pesados. Su objetivo es reutilizar funciones nativas para validar correos electrónicos, nombres, números de teléfono, fechas de nacimiento y obligar al uso de contraseñas seguras. 

El proyecto incluye:
* Un formulario principal de registro.
* Una ventana modal dinámica que muestra la edad calculada.
* Una página de login que valida el formato del correo y la seguridad de la contraseña.
* Funciones adicionales para el cálculo de salud física (IMC) y porcetanje de descuento.

## Instalación

Para usar la librería se debe enlazar el archivo `utileria.js` dentro del HTM.

## Funciones obligatorias

**1. Validación de Texto (Solo letras)**
Verifica que la cadena contenga exclusivamente letras, permitiendo el uso de acentos y espacios, ideal para nombres completos.
```javascript
console.log(soloLetras("Uriel")); 
// Resultado: true
console.log(soloLetras("Uriel123")); 
// Resultado: false
```
**2. Validación de Longitud Máxima**
Asegura que un valor numérico o cadena de texto no exceda el límite de caracteres permitido (ej. números telefónicos a 10 dígitos).
```javascript
console.log(validarLongitud("9511234567", 10)); 
// Resultado: true
console.log(validarLongitud("123456789012", 10)); 
// Resultado: false
```
**3. Validación de Correo Electrónico**
Comprueba que el texto cumpla con el estándar internacional de estructura de correos electrónicos (usuario@dominio.com).
```javascript
console.log(validarCorreo("usuario@ito.edu.mx")); 
// Resultado: true
console.log(validarCorreo("correo_invalido")); 
// Resultado: false
```
**4. Validación de Contraseña Segura**
Filtro de alta seguridad que exige un mínimo de 8 caracteres, al menos una letra mayúscula, una minúscula, un número y un carácter especial.
```javascript
console.log(validarPassword("Sistema2026*")); 
// Resultado: true
console.log(validarPassword("holamundo")); 
// Resultado: false
```
**5. Validación de Mayoría de Edad**
Calcula dinámicamente si la fecha de nacimiento ingresada corresponde a una persona de 18 años o más respecto a la fecha actual del sistema.
```javascript
console.log(esMayorDeEdad("1999-05-15")); 
// Resultado: true
console.log(esMayorDeEdad("2015-08-20")); 
// Resultado: false
```
## Funciones adicionales

**1. Calcular Índice de Masa Corporal (IMC)**
Útil para llevar el seguimiento en una rutina física o médica.
```javascript
console.log(calcularIMC(75, 1.75)); 
// Resultado: 24.49
```
**2. Calcular Descuento en Ventas**
Ideal para sistemas de inventario, calcula el precio final validando que el descuento esté entre 0 y 100%.
```javascript
console.log(calcularDescuento(1500, 10)); 
// Resultado: 1350
```
## Ejemplos

<img width="1918" height="1087" alt="Parte_2" src="https://github.com/user-attachments/assets/6b692831-d956-40c7-ab44-5b82faf32c10" />
<img width="1918" height="1092" alt="Parte_1" src="https://github.com/user-attachments/assets/e376a5e7-7b34-4bf7-8c35-e0b3b5a89aee" />

## Formulario y Modal funcionando
<img width="1918" height="1093" alt="Parte_4" src="https://github.com/user-attachments/assets/44f2deaa-82c5-4832-a1e9-76a79c62597d" />
<img width="1627" height="927" alt="Captura de pantalla 2026-09-24 205954" src="https://github.com/user-attachments/assets/3566a3f5-1647-4074-8541-1abc4ca9f33c" />
<img width="1918" height="1090" alt="Parte_5" src="https://github.com/user-attachments/assets/67737c53-a258-488d-98df-c083ec95da9b" />

## Video demostrativo

El video demostrativo contiene una explicación del problema que resuelve la librería, cómo se instala, cómo se usa y se muestra el resultado en acción interactuando con el formulario, el modal, el login y la consola.
Enlace del video: (https://drive.google.com/file/d/1kG7TAJGLZIGdmyorcxpXb-j6BOUMv-VV/view?usp=sharing)
