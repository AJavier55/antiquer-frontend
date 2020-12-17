import React from "react"
import Item from "../Components/Item"

const FurnitureContainer = (props) => {
    let findFurniture = props.items.filter((item) => item.category === "furniture")
    let furnitureItems = findFurniture.map((item) => (<Item key={item.id} item={item} /> ))
    return (
        <div className="item-container">
            {furnitureItems}
        </div>
    )
}

export default FurnitureContainer