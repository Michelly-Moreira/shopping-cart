require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('Teste a função fetchProducts', () => {
  test('verifica se a fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function')
  });
  test('Verifica se a função é chamada quando passado o argumento computador', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1)
  });
  test('verifica se foi chamada com o endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
   test('verifica se retorno da função com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const resultEqual = await fetchProducts('computador');
    expect(resultEqual).toEqual(computadorSearch);
  });
  test('verifica se retorna erro quando executar a função sem argumento', async() => {
    const withoutParamer = await fetchProducts();
     expect(withoutParamer).toEqual(new Error('You must provide an url'));
  });
});




