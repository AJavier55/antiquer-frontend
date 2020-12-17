import React from "react"

class CategoryFilter extends React.Component {
    sortHandler = (e) => {
        this.props.sorting(e.target.value)
    }

    render() {
        return (
            <div>
                <h5>Filter By Category</h5>
                <select name="sort-by-category" onChange={this.sortHandler}>
                    <option value="fashion">Fashion</option>
                    <option value="furniture">Furniture</option>
                    <option value="collectibles">Collectibles</option>
                    <option value="miscellaneous">Miscellaneous</option>
                </select>
            </div>
        )
    }
}
export default CategoryFilter