import React from "react"
import Item from "../Components/Item"
import { Route, Switch } from "react-router-dom"
import FormContainer from "../Containers/FormContainer"

class ItemContainer extends React.Component {
    state = {
        items: [],
        search: "",
      }
      componentDidMount() {
        fetch("http://localhost:3000/items")
          .then((resp) => resp.json())
          .then((items) =>
            this.setState({ items: items})
          )
      }
      showItems = () => {
          let allItems = this.state.items.map((item) => (
              <Item key={item.id} item={item} />
          ))
          return allItems
      }
      

      render() {
          return (
              <div>
                 <div>
                    <h2>Items</h2>
                    <div className="item-cards">
                        {this.showItems()}
                        {this.props.items}  
                    </div>
                 </div>
              </div>
          )
      }
}



export default ItemContainer