import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component{
    render(){
        return (
        <div className="Coin">
            <img src={`assets/${this.props.info.url}`} alt={this.props.info.side}/>
        </div>
        
        
        )

    }
}

export default Coin