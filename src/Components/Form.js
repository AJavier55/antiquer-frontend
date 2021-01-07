import React from "react"
import { Button } from "react-bootstrap"
import { FormControl } from "react-bootstrap"
import { Form } from "react-bootstrap"


class SellForm extends React.Component {
    state = {
        name: "",
        category: "miscellaneous",
        image: "",
        price: "",
        description: "",
        user_id: 39,
        quantity: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        // console.log(this,this.state)
        this.setState({
        name: "",
        category: "miscellaneous",
        image: "",
        price: "",
        description: "",
        user_id: 39,
        quantity: "",
    })
        this.sellItem()
    }
    
    
    sellItem = () => {
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(this.state)   
            
        })
        // .then(resp => resp.json())
        // .then (data => (this.setState(data))) 

    }

    render() {
        return (
            <div className="sell-form">
                <h4 className="sell">List Item</h4>
                <form className="form" onSubmit={this.submitHandler}>
                    <div className="input-name-form">
                        {/* Name: */}
                        <input className="input-name" name="name" type="text" value={this.state.name} onChange={this.changeHandler} placeholder="name" />
                    </div>
                    <div className="input-price-form">
                        {/* Price: */}
                        <input className="input-price" name="price" type="number" value={this.state.price} onChange={this.changeHandler} placeholder="price" />
                    </div>
                    <div className="input-category-form">
                        {/* Category: */}
                        <select className="input-category" name="category" value={this.state.category} onChange={this.changeHandler} >
                            <option value="miscellaneous">Miscellaneous</option>
                            <option value="fashion">Fashion</option>
                            <option value="furniture">Furniture</option>
                            <option value="collectibles">Collectibles</option>
                        </select>
                    </div>
                    <div className="input-quantity-form">
                        {/* Quantity: */}
                        <input className="input-quantity" name="quantity" type="number" min="1" value={this.state.quantity} onChange={this.changeHandler} placeholder="quantity" />
                    </div>
                    <div className="input-image-url-form">
                        {/* Image: */}
                        <input className="input-image-url" name="image" type="text" value={this.state.image} onChange={this.changeHandler} placeholder="image-url" />
                    </div>
                    <div className="input-description-form">
                        <textarea className="input-description" name="description" type="text" value={this.state.description} onChange={this.changeHandler} placeholder="description" />
                    </div>
                    <input className="sell-button" type="submit" value="Sell item" />
                </form>
            </div>
        )
    }
}

export default SellForm