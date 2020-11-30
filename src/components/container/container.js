import React from 'react';
import Card from '../cards/card.js';
import './style.css';

class Container extends React.Component{  
    
    openModal = (val) =>{
        this.props.fnOpenModal(val);
    }

    render(){
        return(
            <div className="container">
                {this.props.listPokemons.map((pokemon,index) => <Card key={index} nombrePokemon={pokemon.name} urlInfo={pokemon.url} fnOpenModal={this.openModal.bind(this)} />)}
            </div>
        )
    }

}

export default Container;