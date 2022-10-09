import axios from 'axios';


axios.defaults.baseURL = `https://pixabay.com/api/`;
const myKey = '29632293-ff96c464f368918703067e198';
const options = 'image_type=photo&orientation=horizontal'

export const addImages = async (query, page) => {
    const respons = await axios.get(`?q=${query}&page=${page}&${myKey}&${options}&per_page=12`);
    return respons.data
}