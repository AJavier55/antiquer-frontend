import React from "react"
import Purchase from "../Components/Purchase"
import { PayPalButton } from "react-paypal-button-v2"

class PurchaseContainer extends React.Component {
    state = {
      cart: [],
      total: 0,
    }
    componentDidMount() {
      fetch("http://localhost:3000/purchases")
      .then((resp) => resp.json())
      .then((purchases) => this.filteredPurchases(purchases))
    }
    filteredPurchases = (purchases) => {
      this.props.getPurchases(purchases)
      let filteredUsers = purchases.filter((purchase) => purchase.user_id === 0)
      let filteredPurchases = filteredUsers.filter((purchase) => !purchase.sold)
      this.setState({ purchase: filteredPurchases })
    }
    addTotal = (price) => {
      let singlePrice = parseInt(this.state.total)
      this.setState({ total: singlePrice + parseInt(price) })
    }
    updateTotal = (price) => {
      let itemPrice = parseInt(price)
      this.setState({ total: this.state.total - itemPrice })
    }
    cartPurchase = () => {
      return this.state.purchase.map((purchase) => (
        <Purchase
          key={purchase.id}
          purchase={purchase}
          getTotal={this.getTotal}
          updateTotal={this.updateTotal}
        />
      ))
    }
    
}

export default PurchaseContainer