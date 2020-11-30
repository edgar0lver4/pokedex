import React from 'react';
import './style.css';

class PokemonStats extends React.Component{
    
    constructor(){
        super();
        this.state = {
            value: 0,
            class: '',
            subclass:''
        }
    }

    componentDidMount(){
        const roundValue = Math.round(this.props.base/10);
        let idselector = '';
        if(roundValue > 10){
            idselector = 'cont_10_'+this.props.name;
        }else{
            idselector = 'cont_'+roundValue+'_'+this.props.name;
        }
        const subclass = 'sub_'+this.props.name;
        this.setState({value:roundValue,class:idselector,subclass:subclass});
    }

    render(){
        return(
            <div>
                <div className="stats-text">{this.props.name} : {this.props.base}</div>
                <div className={this.state.subclass}><div className={this.state.class}></div></div>
            </div>
        )
    }
}

export default PokemonStats;