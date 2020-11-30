import Navbar from './components/navbar/navbar.js';
import React from 'react';
import './App.css';
import Home from './components/home/home';
import PokemonDetail from './components/pokemonDetails/pokemonDetails';
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      website:'home',
      pokemons:[],
      cortina:false,
      modalInfo:[]
    };
  }

  async componentDidMount(){
    try{
      let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
      let response = await pokemons.json();
      this.setState({pokemons:response});
    }catch(error){
      console.log(error);
    }
  }

  changeWebsite = (webPage)=>{
    this.setState({website:webPage})

  }

  async sendModalInfo(url){
    this.setState({modalInfo:[]});
    let searchInfo = await fetch(url);
    let response = await searchInfo.json();
    this.setState({modalInfo:response});
  }

  async changePage(antes,despues){
    try{
      let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${antes}&limit=100`);
      let response = await pokemons.json();
      this.setState({pokemons:response});
    }catch(error){
      console.log(error);
    }
  } 

  openModal = (val) => {
    if(this.state.cortina){
      this.setState({cortina:false});
    }else{
      this.setState({cortina:true });
    }
    this.sendModalInfo(val);
  }

  render(){
    return (
      <div className="App">
        <div className={ this.state.cortina ? "cortina" : null} onClick={()=>this.openModal()}></div>
        <div className={ this.state.cortina ? "modal-container" : null }>
            {this.state.modalInfo.sprites !== undefined && this.state.cortina ? <PokemonDetail  info={this.state.modalInfo}/> : null}
        </div>
        <Navbar fnChangeWebsite={this.changeWebsite.bind(this)}/>
        { this.state.website === 'home' ? <Home listPokemons={this.state.pokemons.results} fnOpenModal={this.openModal.bind(this)} fnChangePage={this.changePage.bind(this)} /> : null }    
      </div>
    );
  }
}

export default App;
