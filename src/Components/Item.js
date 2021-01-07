import React from "react"
import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <div className="individual-item-card">
            <div className="item-image-card-div">
                <img className="item-card-image" src={props.item.image} alt={props.item.name}></img>
            </div>
            <div className="item-name-card-div">
                <p className="item-name-card">{props.item.name}</p>
            </div>
            <div className="item-price-card-div">
                <p className="item-price-card">${props.item.price}</p>
            <Link to={{ pathname:`/items/${props.item.id}`, state: props}}>
                    <button className="view-item-button" type="button">View</button>
            </Link>
            </div>
        </div>
    )
}

export default Item