const saveCartItems = (obj) => {
  localStorage.setItem('cartItems', JSON.stringify(obj));
};
  
  /* buttonsAdd.forEach((buttonAdd) => {
    buttonAdd.addEventListener('click', (event) => {
      const selected = event.target.parentNode.firstChild.innerText;
      const getElement = document.querySelector('.items');
    });
    const element = [];
      element.push(addElement(selected)); */
// saveCartItems();
/* 
const inputSaved = () => {
  const itemObject = JSON.stringify(car);
  localStorage.setItem('cartItems', itemObject);
}; */
// buttonsAdd.addEventListener('click', inputSaved)

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
