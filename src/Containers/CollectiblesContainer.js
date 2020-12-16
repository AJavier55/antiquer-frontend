import React from "react"
import Item from "../Components/Item"

// const CollectiblesContainer = (props) => {
//     const findCollectibles = props.items.filter((item) => item.category === "collectible")
    
//     return (
//         <div className="item-container">
//             {findCollectibles}
//         </div>
//     )
// }

const CollectiblesContainer = (props) => {
    const findCollectibles = props.items.filter((item) => item.category === "collectible")
    const collectibleItems = findCollectibles.map((item) => (<Item key={item.id} collectibleItems={item} /> ))
    return (
        <div className="item-container">
            {collectibleItems}
        </div>
    )
}

export default CollectiblesContainer