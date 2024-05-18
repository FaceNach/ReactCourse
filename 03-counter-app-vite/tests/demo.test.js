describe('Pruebas en <Demo Component />', () =>
    {
    
   

test ('Esta prueba no debe de fallar.', ()=>
{
    // 1. Arrenge
    const message1 = 'Hola mundo';
    // 2. Act
    const message2 = message1.trim();
    // 3. Assert
    expect(message1).toBe(message2);
});

});