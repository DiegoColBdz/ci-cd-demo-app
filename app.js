// Función súper simple para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Mostrar resultado en la página
document.getElementById('resultado').innerHTML = 
    'La suma de 5 + 3 es: ' + sumar(5, 3);

// Exportar para testing (si usamos Node.js)
if (typeof module !== 'undefined') {
    module.exports = { sumar };
}