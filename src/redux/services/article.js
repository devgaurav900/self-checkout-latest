import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getArticleById(id) {
    const article = await axios
      .post(`${baseURL}/itemId/{id}`, { ...data })
      .then((response) => {
        return response;
      });
}