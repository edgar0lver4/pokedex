import React from 'react';
import PokemonStats from '../pokeStats/pokeStats';

class PokemonDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modalInfo:props.info
        }
    }

    render(){
        return(
            <div className="pokeDetail">
                <header className="modal-header">
                    <div className="header-number"><span># {this.state.modalInfo.id}</span></div>
                    <div><img src={this.state.modalInfo.sprites.front_default} alt={this.state.modalInfo.name} className="modal-imagen"/></div>
                    <div className="header-name-pokemon"><h2>{this.state.modalInfo.name}</h2></div>
                    <div className="header-slots">
                        <div className={this.state.modalInfo.types[0].type.name}>{this.state.modalInfo.types[0].type.name}</div>
                        { this.state.modalInfo.types[1] !== undefined ? <div className={this.state.modalInfo.types[1].type.name}>{this.state.modalInfo.types[1].type.name}</div> : null }
                    </div>
                </header>
                <section className="modal-body">
                    {this.state.modalInfo.stats.map((stat,index) => <PokemonStats key={index} name={stat.stat.name} base={stat.base_stat} />)}
                </section>
            </div>
        )
    }
}

export default PokemonDetail;