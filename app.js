// Función súper simple para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Mostrar resultado en la página (solo si estamos en el navegador)
if (typeof document !== 'undefined') {
    document.getElementById('resultado').innerHTML = 
        'La suma de 5 + 3 es: ' + sumar(5, 3);
}

// Exportar para testing (si usamos Node.js)
if (typeof module !== 'undefined') {
    module.exports = { sumar };
}