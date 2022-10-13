require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('Teste a função fetchItem', () => {
test('verifica se é uma função', async() => {
expect(typeof fetchItem).toBe('function');
});
test('verifica se a função é chamada, quando o argumento "MLB1615760527"', async()=> {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledTimes(1);
});
test('verifica se foi chamada com o endpoint correto', async() => {
  const urlApiFetchItem = "https://api.mercadolibre.com/items/MLB1615760527"
  await fetchItem("MLB1615760527");
  expect(fetch).toHaveBeenCalledWith(urlApiFetchItem);
});
test('verifica o retorno da função quando recebe o argumento "MLB1615760527", se tem uma estrutura igual ao do objeto da mock importada aqui', async() => {
  const toEqualObject = await fetchItem("MLB1615760527")
expect(toEqualObject).toEqual(item);
});
test('verifica se retorna "You must provide an url", quando a função estiver com parâmetro vazio', async() => {
const withoutArgument = await fetchItem();
expect(withoutArgument).toEqual(new Error("You must provide an url"));
});

});


