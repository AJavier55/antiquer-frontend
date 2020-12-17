import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import CurrentAccountContainer from "./Containers/CurrentAccountContainer"
import FormContainer from "./Containers/FormContainer"
import ItemContainer from "./Containers/ItemContainer"
import Nav from "./Components/Nav"
import CollectiblesContainer from "./Containers/CollectiblesContainer"
import FashionContainer from "./Containers/FashionContainer"
import FurnitureContainer from "./Containers/FurnitureContainer"
import MiscContainer from "./Containers/MiscContainer"
import PurchaseContainer from "./Containers/PurchaseContainer"
import SearchContainer from "./Containers/SearchContainer"
import ShowItem from "./Components/ShowItem"
// import { ReactComponent } from '*.svg'
import "bootstrap/dist/css/bootstrap.min.css"

const BASE_URL = "http://localhost:3000/"

class App extends React.Component {
  state= {
    items: [],
    purchases: [],
    itemSearched: [],
  }

  componentDidMount() {
    fetch(BASE_URL + "items")
    .then((resp) => resp.json())
    .then ((items) => this.setState({ items: items }))

    fetch(BASE_URL + "purchases")
    .then((resp) => resp.json())
    .then((purchases) => this.setState({ purchases: purchases }))
  }

  searchHandler = (searchItem) => {
    let itemSearched = this.state.items.filter(
      (item) => item.name.toLowerCase().includes(searchItem)
    )
    this.setState({ itemSearched: itemSearched })
  }
  userPurchase = (purchases) => {
    return purchases
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav searchHandler={this.searchHandler} />
          <Route exact path="/"
          render={(props) => (
            <ItemContainer {...props}
            items={this.state.items} 
            /> 
          )}
          />
          <Route path="/search"
          render={(props) => (
            <SearchContainer {...props}
            items={this.state.itemSearched} />
          )}
          />
          <Route exact path="/antiques"
          render={(props) => (
            <ItemContainer {...props}
            items={this.state.items} />
          )}
          />
          <Route exact path="/antiques/fashion"
          render={(props) => (
            <FashionContainer {...props}
            items={this.state.items} />
          )}
          />
          <Route exact path="/antiques/furniture"
          render={(props) => (
            <FurnitureContainer {...props}
            items={this.state.items} />
          )}
          />
          <Route exact path="/antiques/collectibles"
          render={(props) => (
            <CollectiblesContainer {...props}
            items={this.state.items} />
          )}
          />
          <Route exact path="/antiques/miscellaneous"
          render={(props) => (
            <MiscContainer {...props}
            items={this.state.items} />
          )}
          />
          <Route path="/items/:id"
          render={(props) => (
            <ShowItem {...props} 
            items={this.state.items} />
          )}
          />
          <Route path="/purchase"
          render={(props) => (
            <PurchaseContainer {...props}
            items={this.state.items}
            userPurchase={this.userPurchase} />
          )}
          />
          <Route path="/account"
          render={(props) => (
            <CurrentAccountContainer {...props}
            items={this.state.items}
            purchases={this.state.purchases} />
          )}
          />
          <Route exact path="/sell-item" component={FormContainer} />
        </div>
      </Router>
    )
  }
}
export default App;
