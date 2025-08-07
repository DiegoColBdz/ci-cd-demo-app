// Importar la función a probar
const { sumar } = require('./app.js');

// Función de testing casera (normalmente usarías Jest, Mocha, etc.)
function probarSuma() {
    console.log('🧪 Ejecutando pruebas...');
    
    // Prueba 1: Suma básica
    const resultado1 = sumar(2, 3);
    if (resultado1 === 5) {
        console.log('✅ Prueba 1 PASÓ: 2 + 3 = 5');
    } else {
        console.log('❌ Prueba 1 FALLÓ: esperaba 5, obtuvo ' + resultado1);
        process.exit(1); // Salir con error
    }
    
    // Prueba 2: Suma con ceros
    const resultado2 = sumar(0, 0);
    if (resultado2 === 0) {
        console.log('✅ Prueba 2 PASÓ: 0 + 0 = 0');
    } else {
        console.log('❌ Prueba 2 FALLÓ: esperaba 0, obtuvo ' + resultado2);
        process.exit(1);
    }
    
    console.log('🎉 ¡Todas las pruebas pasaron!');
}

// Ejecutar pruebas
probarSuma();