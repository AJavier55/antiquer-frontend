import React from "react"
import Item from "../Components/Item"

const MiscContainer = (props) => {
    const findMiscellanous = props.items.filter((item) => item.category === "miscellaneous")
    const miscellaneousItems = findMiscellanous.map((item) => (<Item key={item.id} item={item} /> ))
    return (
        <div className="item-container">
            {miscellaneousItems}
        </div>
    )
}

export default MiscContainer