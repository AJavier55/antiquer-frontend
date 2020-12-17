import React from "react"

class Sell extends React.Component {
    state = { deleted: false }

    removeItem = (e) => {
        let  id = this.props.item.id
        fetch(`http://localhost:3000/items/${id}` , {
            method: "DELETE",
        })
    }

    clickHandler = () => {
        const deleted = this.state.deleted
        this.setState({ deleted: !deleted })
        this.removeItem()
    }

    render() {
        let item = this.props.item
        return (
            <div className={this.state.deleted ? "deleted" : "visible"}>
                <img src={item.image} alt={item.name} />
                <h5> {item.name} </h5>
                <h5> ${item.price} </h5>
                <h5> Quantity: {item.quantity} </h5>
                <button onClick={this.clickHandler}>Delete</button>
            </div>
        )
    }
}

export default Sell