// 🐛 BUG INTRODUCIDO INTENCIONALMENTE
function sumar(a, b) {
    return a * b; // ❌ Cambié + por * (multiplicar en lugar de sumar)
}

// El resto del código igual...
document.getElementById('resultado').innerHTML = 
    'La suma de 5 + 3 es: ' + sumar(5, 3); // Ahora mostrará 15 en lugar de 8

if (typeof module !== 'undefined') {
    module.exports = { sumar };
}