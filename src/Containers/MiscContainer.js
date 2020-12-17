import React from "react"
import Item from "../Components/Item"

const MiscContainer = (props) => {
    const findMiscellaneous = props.items.filter((item) => item.category === "miscellaneous")
    const collectibleItems = findMiscellaneous.map((item) => (<Item key={item.id} item={item} /> ))
    return (
        <div className="item-container">
            {collectibleItems}
        </div>
    )
}

export default MiscContainer