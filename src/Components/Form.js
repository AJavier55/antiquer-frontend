import React from "react"

class Form extends React.Component {
    state = {
        name: "",
        category: "miscellaneous",
        image: "",
        price: "",
        description: "",
        user_id: 1,
        quantity: "",
    }

    sellItem = () => {
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(this.state),   
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
        name: "",
        category: "miscellaneous",
        image: "",
        price: "",
        description: "",
        user_id: 1,
        quantity: "",
    })
        this.sellItem()
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="sell-form">
                <h4 className="sell">Sell Item</h4>
                <form className="form" onSubmit={this.submitHandler}>
                    <div className="input-name">
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.changeHandler} placeholder="name" />
                    </div>
                    <div className="input-price">
                        Price:
                        <input name="price" type="number" value={this.state.price} onChange={this.changeHandler} placeholder="price" />
                    </div>
                    <div className="input-category">
                        Category:
                        <select name="category" value={this.state.category} onChange={this.changeHandler} >
                            <option value="miscellaneous">Miscellaneous</option>
                            <option value="fashion">Fashion</option>
                            <option value="furniture">Furniture</option>
                            <option value="collectibles">Collectibles</option>
                        </select>
                    </div>
                    <div className="input-quantity">
                        Quantity:
                        <input name="quantity" type="number" min="1" value={this.state.quantity} onChange={this.changeHandler} placeholder="quantity" />
                    </div>
                    <div className="input-image-url">
                        Image:
                        <input name="image" type="text" value={this.state.image} onChange={this.changeHandler} placeholder="image-url" />
                    </div>
                    <div className="input-description">
                        <textarea name="description" type="text" value={this.state.description} onChange={this.changeHandler} placeholder="description" />
                    </div>
                    <input type="submit" value="sell-item" />
                </form>
            </div>
        )
    }
}

export default Form