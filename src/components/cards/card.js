import React from 'react';
import './style.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info: [],
            preUrlInfo:'',
            urlInfo:props.urlInfo
        }
    }

    async componentDidMount(){
        let data = await fetch(this.state.urlInfo);
        let response = await data.json();
        this.setState({ info: response,preUrlInfo:this.state.urlInfo });
    }

    async componentDidUpdate(){
        if(this.state.preUrlInfo !== this.props.urlInfo){
            let data = await fetch(this.props.urlInfo);
            let response = await data.json();
            this.setState({ info: response,preUrlInfo:this.props.urlInfo });
        }
    }

    openModal = (val)=>{
        this.props.fnOpenModal(val);
    }

    render(){
        return(
            <div className="target" onClick={()=>this.openModal(this.props.urlInfo)}>
                <div># {this.state.info.id === undefined ? '' : <span>{this.state.info.id}</span> }</div>
                <div>{ this.state.info.sprites === undefined ? 'Cargando imagen' : <img src={this.state.info.sprites.front_default} className="imagenPokemon" alt={this.props.nombrePokemon}></img>  }</div>
                {this.props.nombrePokemon}
            </div>
        )
    }
}

export default Card;