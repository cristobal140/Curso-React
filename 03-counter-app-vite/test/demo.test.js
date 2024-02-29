

describe('Pruebas en <DemoComponent>', () => { 
    test('Esta prueba no debe de fallar', () => {

        // 1. inicialización
        const mensaje1 = 'Hola Mundo';
        // 2. estimulo
        const mensaje2 = mensaje1.trim();
        // 3. observar el comportamiento
        expect( mensaje1 ).toBe( mensaje2 )
    
    })
 })
