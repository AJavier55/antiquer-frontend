import React from "react"
import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <div className="individual-item-card">
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
            <Link to={{pathname:`/items/${props.item.id}`, state: props}}>
                    <button type="button">View</button>
            </Link>
        </div>
    )
}

export default Item