import React from "react"
import Purchase from "../Components/Purchase"
import { PayPalButton } from "react-paypal-button-v2"

class PurchaseContainer extends React.Component {
    state = {
      purchase: [],
      total: 0,
    }
    componentDidMount() {
      fetch("http://localhost:3000/purchases")
      .then((resp) => resp.json())
      .then((purchases) => this.filterPurchases(purchases))
    }
    filterPurchases = (purchases) => {
      this.props.getPurchases(purchases)
      let filteredUsers = purchases.filter((purchase) => purchase.user_id === 39)
      let filteredPurchases = filteredUsers.filter((purchase) => !purchase.sold)
      this.setState({ purchase: filteredPurchases })
    }

    updatePurchase = (to_delete) => {
      let filterItem = this.state.purchase.filter((item) => item.item_id !== to_delete)
      return this.setState({purchase: filterItem})

    }
    cartPurchase = () => {
      return this.state.purchase.map((purchase) => (
        <Purchase
          key={purchase.id}
          purchase={purchase}
          getTotal={this.getTotal}
          updateTotal={this.updateTotal}
          updatePurchase={this.updatePurchase}
        />
      ))
    }
    getTotal = (price) => {
      let singlePrice = parseInt(this.state.total)
      this.setState({ total: singlePrice + parseInt(price) })
    }
    updateTotal = (price) => {
      let itemPrice = parseInt(price)
      this.setState({ total: this.state.total - itemPrice })
    }
    
    completePurchase = () => {
      this.state.purchase.forEach((item) =>
      fetch(`http://localhost:3000/purchases/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          sold: true, 
        }),
        headers: {
          "Content-type": "application/json",
          "Accepts": "application/json"
        },
      })
    )
    this.itemQuantity()
    }

    itemQuantity = () => {
      this.state.purchase.forEach((item) =>
        fetch(`http://localhost:3000/items/${item.item_id}`, {
          method: "PATCH",
          body: JSON.stringify({
            quantity: item.quantityAvailable - item.quantity,
          }),
          headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
          },
        })
      )
      this.setState({ purchase: [], total: 0 })
      this.cartPurchase()
    }

    render() {
      return (
        <div className="cart">
          <h3>Cart</h3>
          {this.cartPurchase()}
          <div>
            <PayPalButton
            amount={this.state.total} onSuccess={(data) => {
              alert(
               "Your Transaction Was Successfully Completed!"
              )
              this.completePurchase()
            }}
            />
          </div>
          <h5>Total: ${this.state.total}</h5>
        </div>
      )
    }
}

export default PurchaseContainer