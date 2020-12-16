import React from "react"
import Item from "../Components/Item"

const SearchContainer = (props) => {
    const searchItems = props.items.map((item) => (
        <Item key={item.id} item={item} />
    ))

    return searchItems
}

export default SearchContainer