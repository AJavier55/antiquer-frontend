import React from "react"
import Item from "../Components/Item"


const CollectiblesContainer = (props) => {
    let findCollectibles = props.items.filter((item) => item.category === "collectible")
    let collectibleItems = findCollectibles.map((item) => (<Item key={item.id} item={item} /> ))
    return (
        <div className="item-div">
        <div className="item-container">
            {collectibleItems}
        </div>
        </div>
    )
}

export default CollectiblesContainer