const fetchProducts = async (products) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${products}`);
    const responseValue = await response.json();
    // console.log(responseValue);
    return responseValue;
  } catch (error) {
    return error;
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
