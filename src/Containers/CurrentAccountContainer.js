import React from "react"
import Sell from "../Components/Buy"

const CurrentAccountContainer = (props) => {
    const filteredItems = props.items.filter(
        (item) => item.user_id === 1
    )
    const userSelling = filteredItems.map((item) => (
        <Sell key={item.id} item={item}/>
    ))

    return (
        <div>
          <h1 className="account-headers">Items for Sale</h1>
          {userSelling}
        </div>
      )
}

export default CurrentAccountContainer