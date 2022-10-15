import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api/';
const myKey = 'key=29632293-ff96c464f368918703067e198';
const options = 'image_type=photo&orientation=horizontal';

export default async function getImages(query, page) {
    const respons = await axios.get(`?q=${query}&page=${page}&${myKey}&${options}&per_page=12`);
    return respons.data
}