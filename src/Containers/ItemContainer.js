import React from "react"
import Item from "../Components/Item"
import CategoryFilter from "../Components/CategoryFilter"
import FormContainer from "../Containers/FormContainer"

class ItemContainer extends React.Component {
    state = {
        items: [],
        filteredItems: [],
        display: false,

      }
      componentDidMount() {
        fetch("http://localhost:3000/items")
          .then((resp) => resp.json())
          .then((items) =>
            this.setState({ items: items, filteredItems: items })
          )
          
      }
      showItems = () => {
          let filteredItems = this.state.filteredItems.filter(
              (item) => item.quantity !== 0
          )
          return filteredItems.map((item) => (
            <Item key={item.id} item={item} />
        ))
      }
      sorting = (category) => {
          let filteredItems = this.state.items.filter(
              (item) => item.category === category
          )
        this.setState({ filteredItems: filteredItems })
      }
     
      clearFilter = () => {
        this.setState({ filteredItems: this.state.items })
      }
    
      // formHandler = () => {
      //   this.setState({ display: !this.state.display })
      // }

      render() {
          return (
              <div className="front-page-div">
                  <CategoryFilter 
                  sorting={this.sorting}
                  clearFilter={this.clearFilter}
                  items={this.props.items}
                  />
                 <div className="item-wrapper">
                    {/* <h2 className="all-items">Antiques</h2> */}
                    <div className="item-cards">
                        {this.showItems()} 
                    </div>
                 </div>
              </div>
          )
      }
}



export default ItemContainer