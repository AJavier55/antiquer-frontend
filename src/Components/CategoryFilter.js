import React from "react"

class CategoryFilter extends React.Component {
    sortHandler = (e) => {
        this.props.sorting(e.target.value)
    }

    render() {
        return (
            <div className="category-filter">
                <div className="find-by">
                <h5 className="category-title">Find By Category</h5>
                <select name="sort-by-category" onChange={this.sortHandler}>
                    <option value="fashion">Fashion</option>
                    <option value="furniture">Furniture</option>
                    <option value="collectibles">Collectibles</option>
                    <option value="miscellaneous">Miscellaneous</option>
                </select>
                </div>
            </div>
        )
    }
}
export default CategoryFilter