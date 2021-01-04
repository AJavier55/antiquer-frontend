import React from "react"
import {withRouter} from "react-router-dom"


class Purchase extends React.Component {
    state = {
        item: [],
        price: 0,
        deleted: false,
    }

    componentDidMount() {
        fetch(`http://localhost:3000/items/${this.props.purchase.item_id}`)
        .then((resp) => resp.json())
        .then((item) => this.updateState(item))
    }

    updateState = (item) => {
        this.setState({
            item: item,
            price: item.price * this.props.purchase.quantity,
        })
        this.getTotal()
    }
    getTotal = () => {
        this.props.getTotal(this.state.price)
    }
    deleteHandler = () => {
        const deleted = this.state.deleted
        this.setState({ deleted: !deleted, price: 0 })
        this.props.updateTotal(this.state.item.price * this.props.purchase.quantity)
        this.deleteCart()
        // this.updateCart()
       }

    
    deleteCart = () => {
       let id = this.props.purchase.id
       fetch(`http://localhost:3000/purchases/${id}`, {
        method: "DELETE",
      })
    .then(resp => resp.json())
    .then (data => this.props.updatePurchase(data.item_id))
   }

  

   render() {
       let item = this.state.item
    //    console.log(item)
       if (item !== []) {
        return (
            <div className={this.state.deleted ? "deleted" : "visible"}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                 <h5 className="cart-item-name">{item.name}</h5>
                 <h5 className="cart-price">${item.price * this.props.purchase.quantity}</h5>
                 <div className="delete-cart-div">
                 <button className="delete-cart" onClick={this.deleteHandler}>Delete</button>
                 </div>
                 
                 {/* <h5>Quantity: {this.props.purchase.quantity}</h5>   */}
            </div>
        )
       }
       else { 
           return (null)
       }
   }
} 

export default withRouter (Purchase)