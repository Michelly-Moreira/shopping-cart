const fetchItem = async (ItemID) => {
  const urlFetchItem = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
  const responseFetchItem = await urlFetchItem.json();
  return responseFetchItem;
};
fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
