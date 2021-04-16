import axios from 'axios';

const api = axios.create({
  baseURL: 'https://db.ygoprodeck.com/api/v7',
});

// GET a list of cards
async function getCards(searchTerm, nextPageOffset) {
  console.log('Request API with an Offset of: ' + nextPageOffset);

  const params = {
    params: {
      fname: searchTerm,
      num: 50,
      offset: nextPageOffset,
    },
  };

  try {
    const response = await api.get('/cardinfo.php', params);
    return response;
  } catch (error) {
    return error.response;
  }
}

// GET the details of a card
async function getCardDetails(name) {
  const params = {
    params: {
      name: name,
      num: 1,
      offset: 0,
    },
  };

  try {
    const response = await api.get('/cardinfo.php', params);
    return response;
  } catch (error) {
    return error.response;
  }
}

export { getCards, getCardDetails };
export default api;
