import axios from 'axios';

const api = axios.create({
  baseURL: 'https://db.ygoprodeck.com/api/v7',
});

// GET a list of cards
async function getCards(searchTerm, nextPageOffset) {
  const params = {
    params: {
      fname: searchTerm,
      num: 18,
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

export default api;
export { getCards };
