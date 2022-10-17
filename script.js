// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const saveCartItems = require("./helpers/saveCartItems");

const resultProducts = async () => {
  const getProducts = await fetchProducts('computador');
  const { results } = getProducts;
  // console.log(results);
  return results;
};
resultProducts();

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  // console.log(section)
  return section;
};

const createItem = async () => {
  const getElement = document.querySelector('.items');
  const inputElement = await resultProducts();
  // console.log(inputElement);
  inputElement.forEach((element) => {
    const inputProduct = createProductItemElement(element);
    // console.log(inputProduct);
    getElement.appendChild(inputProduct);
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const buttonRemove = document.querySelector('.empty-cart'); // botão esvaziar carrinho
// carShopping.remove(); // remove todos os itens do carrinho.

const cartItemClickListener = (event) => {
  event.target.remove(); // removendo item quando clica no item dentro do carrinho.
};

const carShopping = document.querySelector('.cart__items'); // carrinho

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  // return li; 
  carShopping.appendChild(li);
  return { id, title, price };
};

const addElement = () => {
  savedItem = [];
  const buttons = document.querySelectorAll('.item__add');// botão adicionar   

  buttons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const selectedItem = event.target.parentNode.firstChild.innerText;// alvo no item clicado de acordo com as classes do item
      // console.log(selectedItem);
      const itemList = await fetchItem(selectedItem);// lista que mostra o item de acordo com o id;
      const itemObject = createCartItemElement(itemList);

      savedItem.push(itemObject);
      saveCartItems(savedItem);
    });
  });
};

function savedItensLocalStorage() {
  if (localStorage.length !== 0) {
    const getLocalStorage = getSavedCartItems();// recupera o que estiver salvo no localStorage
    const objItem = JSON.parse(getLocalStorage);
    objItem.forEach((element) => {
      createCartItemElement(element);
    });
  } else {
    saveCartItems([]);// facilita de trabalhar com ele, se precisar depois.
  }
}

window.onload = async () => {
  await createItem();
  addElement();
  savedItensLocalStorage();
};
