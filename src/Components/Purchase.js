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
        // console.log(this.state)
        this.props.updateTotal(this.state.item.price * this.props.purchase.quantity)
        this.deleteCart()
        // this.updateCart()
       }

    
    deleteCart = () => {
       let id = this.props.purchase.id
    //    console.log(this.state.item)
       fetch(`http://localhost:3000/purchases/${id}`, {
        method: "DELETE",
      })
    //   .then(this.props.updatePurchase(id))
    .then(resp => resp.json())
    .then (data => this.props.updatePurchase(data.item_id))
    //   .then (this.props.history.push("/purchase"))
   }


  
  

   render() {
       let item = this.state.item
    //    console.log(item)
       if (item !== []) {
        return (
            <div className={this.state.deleted ? "deleted" : "visible"}>
                <img src={item.image} alt={item.name} />
                 <h5>{item.name}</h5>
                 <h5>${item.price * this.props.purchase.quantity}</h5>
                 <button className="delete-cart" onClick={this.deleteHandler}>Delete</button>
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