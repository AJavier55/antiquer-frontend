import React from "react"
import Item from "../Components/Item"

const FashionContainer = (props) => {
    let findFashion = props.items.filter((item) => item.category === "fashion")
    let fashionItems = findFashion.map((item) => (<Item key={item.id} item={item} /> ))
    return (
        <div className="item-div">
        <div className="item-container">
            {fashionItems}
        </div>
        </div>
    )
}

export default FashionContainer