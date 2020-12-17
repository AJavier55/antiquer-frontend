import React from "react"
import { NavLink } from "react-router-dom"

const Item = (props) => {
    return (
        <div className="individual-item-card">
                <NavLink to={`/items/${props.item.id}`}>
                    <button type="button">View</button>
                </NavLink>
            <div className="item-image">
                <img src={props.item.image} alt={props.item.name}></img>
            </div>
            <div className="item-name">
                <h5>{props.item.name}</h5>
            </div>
            <div className="item-quantity">
                <h5> Quantity: {props.item.quantity} </h5>
            </div>
            <div className="item-price">
                <h5>${props.item.price}</h5>
    
            </div>
        </div>
    )
}

export default Item