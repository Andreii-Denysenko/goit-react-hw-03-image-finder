import { Component } from "react"
// import {Layout} from './Layout'
import  Searchbar  from '../components/Searchbar/Searchbar'
import  getImages   from '../components/api'

export class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: false,
    query: '',
    page: 1,
  };


 
handlerFormSubmit = values => {
  const { query } = this.state;
  if (query !== values.searchQuery.trim()) {
    this.setState({
      page: 1,
      isLoading: false,
      error: false,
      items: [],
      query: values.searchQuery.trim(),
    });
  }
};

fetchImg = async (query, page) => {
  try {
    this.setState({ isLoading: true });

    const response = await getImages(query, page);
    const images = response.hits;
    this.setState(({ items }) => ({
      items: [...items, ...images],
    }));
  } catch {
    this.setState({ error: 'Can`t load images!' });
  } finally {
    this.setState({ isLoading: false });
  }
};



  render(){
    return (
      <Searchbar onSubmit={this.handlerFormSubmit}/>
  );
  }
  
};
