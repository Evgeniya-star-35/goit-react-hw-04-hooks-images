import axios from 'axios';
const API_KEY = '22851319-26dce2435af98d9caa304e2ac';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const fetchPictures = async (query, page = 1) => {
  try {
    const {
      data: { hits },
    } = await axios.get(`?&q=${query}&page=${page}&per_page=12&key=${API_KEY}`);

    return hits;
  } catch (error) {
    console.log(error.message);
  }
};
export { fetchPictures };
