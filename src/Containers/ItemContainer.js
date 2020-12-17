import React from "react"
import Item from "../Components/Item"
import FormContainer from "../Containers/FormContainer"

class ItemContainer extends React.Component {
    state = {
        items: [],
        display: false,
        checked: [],
        filteredItems: [],
      }
      componentDidMount() {
        fetch("http://localhost:3000/items")
          .then((resp) => resp.json())
          .then((items) =>
            this.setState({ items: items, filteredItems: items })
          )
      }
      formHandler = () => {
        this.setState({ display: !this.state.display })
      }
      showItems = () => {
          let filteredItems = this.state.filteredItems.filter(
              (item) => item.quantity !== 0
          )
          return filteredItems.map((item) => (
              <Item key={item.id} item={item} />
          ))
      }

      render() {
          return (
              <div>
                 <div className="form-display">
                     {this.state.display ? <FormContainer /> : null}
                 </div>
                 <div className="form-button">
                 <button onClick={this.formHandler}>
                    Sell Item
                </button>
                 </div>
                 <div>
                    <h2>Items</h2>
                    <div className="item-cards">
                        {this.showItems()}
                    </div>
                 </div>
              </div>
          )
      }
}

export default ItemContainer