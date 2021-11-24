import React from 'react'
import { formatPrice } from '../helpers';
class Fish extends React.Component{
   handleClick = () => {
        this.props.addToOrder(this.index);
   }
   
    render(){
        const {image, price, desc, name, status} = this.props.details; 
        
        const isAvailable = status === 'available';
        
        return (
            <li className="menu-fish">
                <img src = {image} alt={name}/>
                 <h3 className="fish-name">
                     {name}
                     <span className="price">{formatPrice(price)}</span>               
                 </h3>
                 <p className="fishDes">{desc}</p>
                 <button disabled = {!isAvailable} onSubmit={this.handleClick}>{isAvailable ? 'Add To Order': 'Sold Out!'}</button>
            </li>

    )
   }

}

export default Fish; 