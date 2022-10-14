const fetchItem = async (ItemID) => {
  try {
  const urlFetchItem = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
  const responseFetchItem = await urlFetchItem.json();
  return responseFetchItem;
} catch (error) {
  return error;
}
};
// fetchItem();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
