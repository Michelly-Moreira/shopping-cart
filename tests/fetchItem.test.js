require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('Teste a função fetchItem', () => {
test('verifica se é uma função', async() => {
expect(typeof fetchItem).toBe('function');
});
test('verifica se a função é chamada, quando o argumento "MLB1615760527"', async()=> {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledTimes(1); //retornar e testar após a função pronta
});
/* test('verifica se foi chamada com o endpoint correto', async() => {
  const urlApiFetchItem = "https://api.mercadolibre.com/items/MLB1615760527"
  await fetchItem("MLB1615760527");
  expect(fetch).toHaveBeenCalledWith(urlApiFetchItem); // testar após função pronta
});
test('verifica se retorno da função quando recebe o argumento "MLB1615760527", tem uma de objeto item que já está importado no arquivo', async() => {
await expect(fetchItem("MLB1615760527")).resolves.toEqual({ //  TESTAR APÓS FUNÇÃO FICAR PRONTA
  "id": "MLB1615760527",
  "site_id": "MLB",
  "title": " Cpu Pc Torre Core I5 3470 3.20ghz 8gb Ssd 240gb Com Nf",
  "subtitle": null,
  "seller_id": 298832663,
  "category_id": "MLB1649",
});
});
test('verifica se retorna "You must provide an url", quando a função estiver com parâmetro vazio', () => {
const withoutArgument = await(fetchItem());
expect(withoutArgument).toEqual(new Error("You must provide an url")); // test after function
}); */
});

//Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;
//Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
//Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
//Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'.

