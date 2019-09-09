import React, {Component} from 'react';
import logo from './netflix-logo.png';
import axios from   'axios';
import './App.css';
import MovieSlider from './component/MovieSlider';
import MovieSingle from './component/MovieSingle';

const token = 'e5693481ef000bfdd855a0f21ad39631';
const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});

class App extends Component{
  
  constructor (props){
    super(props)
    this.state = {
      moveis: [],
      title: 'Julio',
    }
  }

  componentDidMount(){
    API.get(`popular?api_key=${ token }`).then( resp => {
      this.setState({
        moveis: resp.data.results,
      });
    }).catch((error)=>{
      console.log(error);
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <MovieSingle banner={true} moveis={this.state.title}/>
          <MovieSlider  moveis={this.state.moveis} title="Filmes" />
        </div>
    );
  }
}

export default App;
