const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('Teste a função saveCartItems', () => {
  test('verifica se quando a função recebe como argumento "cartItem", o método localStorage.setItem é chamado', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  })
  test('verifica se quando o argumento da função for "cartItem", o método localStorage é chamado com dois parâmetros', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem');
  })
});


