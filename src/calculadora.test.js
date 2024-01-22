const calculadora = require('./calculadora');

test('calculaSalario deve retornar o salário correto', () => {
  const salarioCalculado = calculadora.calculaSalario(40, 20); 
  expect(salarioCalculado).toBe(900); 
});

