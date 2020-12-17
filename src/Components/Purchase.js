import React from "react"

class Purchase extends React.Component {
    state = {
        item: [],
        price: 0,
        deleted: false,
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/items/${this.props.purchase.item_id}`)
        .then((resp) => resp.json())
        .then((item) => this.updateState(item))
    }

    updateState = (item) => {
        this.setState({
            item: item,
            price: item.price * this.props.purchase.quantity
        })
        this.getTotal()
    }
    getTotal = () => {
        this.props.getTotal(this.state.price)
    }
    deleteHandler = (e) => {
        const deleted = this.state.deleted
        this.setState({ deleted: !deleted, price: 0 })
        console.log(this.state.item.price)
        this.props.updateTotal(this.state.item.price * this.props.purchase.quantity)
        this.deleteCart()
       }

   deleteCart = (e) => {
       let id = this.props.purchase.id
       fetch(`http://localhost:3000/api/v1/purchases/${id}`, {
        method: "DELETE",
      })
   }
  

   render() {
       let item = this.state.item
       return (
           <div className={this.state.deleted ? "deleted" : "visible"}>
               <img src={item.image} alt={item.name} />
                <h5>{item.name}</h5>
                <h5>${item.price * this.props.purchase.quantity}</h5>
                <button onClick={this.deleteHandler}>Delete</button>
                <h5>Quantity: {this.props.purchase.quantity}</h5>  
           </div>
       )
   }
} 

export default Purchase