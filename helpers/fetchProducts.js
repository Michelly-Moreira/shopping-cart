const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const responseValue = await response.json();
    // console.log(responseValue);
    return responseValue;
  } catch (error) {
    console.log('Error', error);
  }
};
 // fetchProducts(); 

/* const getProduct = async () => {
  await fetchProducts();
  return fetchProducts;
};
getProduct(); */
 
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
