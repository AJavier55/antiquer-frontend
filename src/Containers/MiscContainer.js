import React from "react"
import Item from "../Components/Item"

const MiscContainer = (props) => {
    let findMiscellaneous = props.items.filter((item) => item.category === "miscellaneous")
    let collectibleItems = findMiscellaneous.map((item) => (<Item key={item.id} item={item} /> ))
    return (
        <div className="item-container">
            {collectibleItems}
        </div>
    )
}

export default MiscContainer