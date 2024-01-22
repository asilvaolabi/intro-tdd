const calculadora = require('./calculadora');

test('calculaSalario deve retornar o salário correto', () => {
  const salarioCalculado = calculadora.calculaSalario(40, 20); // 40 horas, R$20/hora
  expect(salarioCalculado).toBe(800); // 40 * 20 = 800
});
