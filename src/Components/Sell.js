import React from "react"

class Sell extends React.Component {
    state = { deleted: false }

    clickHandler = () => {
        const deleted = this.state.deleted
        this.setState({ deleted: !deleted })
        this.removeItem()
    }
   
    removeItem = () => {
        let  id = this.props.item.id
        fetch(`http://localhost:3000/items/${id}` , {
            method: "DELETE",
        })
    }


    render() {
        let item = this.props.item
        return (
            <div className={this.state.deleted ? "deleted" : "visible"}>
                <img className="selling-item-image" src={item.image} alt={item.name} />
                <h5 className="selling-item-name"> {item.name} </h5>
                <h5 className="selling-item-price"> ${item.price} </h5>
                <div className="selling-item-delete">
                  <button onClick={this.clickHandler}>Delete</button>
                </div>
                <h5 className="selling-item-quantity"> Quantity: {item.quantity} </h5>
            </div>
        )
    }
}

export default Sell