import React from 'react';

class Navbar extends React.Component{

    

    changeWebsite(val){
        this.props.fnChangeWebsite(val);
    }

    render(){
        return(
            <nav>
                POKEDEX
            </nav>
        )
    }
}
export default Navbar;