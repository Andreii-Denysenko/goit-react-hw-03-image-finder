import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const myKey = 'key=29632293-ff96c464f368918703067e198';
const elseParams = 'image_type=photo&orientation=horizontal';

export default async function getImg(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&${myKey}&${elseParams}&per_page=12`
  );
  return response.data;
}