import React from "react"
import Item from "../Components/Item"

const FashionContainer = (props) => {
    const findFashion = props.items.filter((item) => item.category === "fashion")
    const fashionItems = findFashion.map((item) => (<Item key={item.id} fashionItems={item} /> ))
    return (
        <div className="item-container">
            {fashionItems}
        </div>
    )
}

export default FashionContainer