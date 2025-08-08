// ✅ BUG CORREGIDO
function sumar(a, b) {
    return a + b; // Volvemos a la suma correcta
}

// Mostrar en navegador solamente
if (typeof document !== 'undefined') {
    document.getElementById('resultado').innerHTML = 
        'La suma de 5 + 3 es: ' + sumar(5, 3);
}

// Exportar para testing en Node.js
if (typeof module !== 'undefined') {
    module.exports = { sumar };
}
