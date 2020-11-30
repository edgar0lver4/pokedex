import React from 'react';
import Container from '../container/container.js';
import './style.css';
class Home extends React.Component{
    
    constructor(){
        super();
        this.state = {
            pages:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    openModal = (val) =>{
        this.props.fnOpenModal(val);
    }

    changePage(val){
        let antes = val*100 - 100;
        let despues= val*100;
        this.props.fnChangePage(antes,despues);
    }

    render(){
        return(
            <div>
                <h2>Da click en el pokemon para ver sus caractéristicas</h2>
                <div>
                    {
                        this.state.pages.map((page, index) => <button key={index} className="link" onClick={()=>this.changePage(page)}>{page}</button>)
                    }
                </div>
                {this.props.listPokemons == null ? 'Cargando' : <Container listPokemons={this.props.listPokemons} fnOpenModal={this.openModal.bind(this)}/>}
                <div>
                    {
                        this.state.pages.map((page, index) => <button key={index} className="link" onClick={()=>this.changePage(page)}>{page}</button>)
                    }
                </div>
            </div>
        )
    }
}

export default Home;