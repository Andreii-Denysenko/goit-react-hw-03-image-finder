import { Component } from "react"
// import {Layout} from './Layout'
import { Searchbar } from '../components/Searchbar/Searchbar'
import  addImages  from './api'

export class App extends Component {
state = {
materials: [],
};


 addMaterials = async (values) => {
const material = API.addMaterials(values);
console.log(material)
  };


  render(){
    return (
    
      <Searchbar onSubmit={this.addMaterials}/>
  
  );
  }
  
};
