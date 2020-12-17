import React from "react"

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
            price: item.price * this.props.purchase.quantity
        })
        this.purchaseTotal()
    }
    purchaseTotal = () => {
        this.props.purchaseTotal(this.state.price)
    }

   deleteCart = (e) => {
       let id = this.props.purchase.id
       fetch(`http://localhost:3000/purchases/${id}`, {
        method: "DELETE",
      })
   }
   deleteHandler = (e) => {
    const deleted = this.state.deleted
    this.setState({ deleted: !deleted, price: 0 })
    console.log(this.state.item.price)
    this.props.updateTotal(this.state.item.price * this.props.purchase.quantity)
    this.deleteCart()
   }

   render() {
       let item = this.state.item
       return (
           <div className={this.state.deleted ? "deleted" : "visible"}>
               <img src={item.image} alt={item.name} />
                <h5>{item.name}</h5>
                <h5>${item.price * this.props.purchase.quantity}</h5>
                <h5>Quantity: {this.props.purchase.quantity}</h5>
                <button onClick={this.deleteHandler}>Delete</button>
           </div>
       )
   }
} 

export default Purchase