import React from "react"
import Sell from "../Components/Sell"
import Buy from "../Components/Buy"

const CurrentAccountContainer = (props) => {
    const filteredItems = props.items.filter(
        (item) => item.user_id === 39
    )
    const userSelling = filteredItems.map((item) => (
        <Sell key={item.id} item={item}/>
    ))
    const filterUserPurchases = props.purchases.filter((purchase) => (purchase.user_id = 39))
    const filterSales = filterUserPurchases.filter((purchase) => purchase.sold)
    const userBought = filterSales.map((purchase) => (
      <Buy key={purchase.id} purchase={purchase} items={props.items} />
    ))

    return (
        <div>
          <h1 className="account-headers">Items for Sale</h1>
          {userSelling}
          {userBought}
        </div>
      )
}

export default CurrentAccountContainer