import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import CurrentAccountContainer from "./Containers/CurrentAccountContainer"
import FormContainer from "./Containers/FormContainer"
import ItemContainer from "./Containers/ItemContainer"
import NavBar from "./Components/Nav"
import CollectiblesContainer from "./Containers/CollectiblesContainer"
import FashionContainer from "./Containers/FashionContainer"
import FurnitureContainer from "./Containers/FurnitureContainer"
import MiscContainer from "./Containers/MiscContainer"
import PurchaseContainer from "./Containers/PurchaseContainer"
import SearchContainer from "./Containers/SearchContainer"
import ShowItem from "./Components/ShowItem"
// import { ReactComponent } from '*.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"



class App extends React.Component {
  state = {
    items: [],
    purchases: [],
    itemFiltered: [],
  }

  componentDidMount() {
    fetch("http://localhost:3000/items")
    .then((resp) => resp.json())
    .then ((items) => this.setState({ items: items }))

    fetch("http://localhost:3000/purchases")
    .then((resp) => resp.json())
    .then((purchases) => this.setState({ purchases: purchases }))
  }

  searchHandler = (searchItem) => {
    let itemFiltered = this.state.items.filter(
      (item) => item.name.toLowerCase().includes(searchItem)
    )
    this.setState({ itemFiltered: itemFiltered })
  }
  getPurchases = (purchases) => {
    return purchases
  }

  render() {
    return (
      <div className="app-div">
        <Router>
        <div className="App">
          <NavBar searchHandler={this.searchHandler} />
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
            items={this.state.itemFiltered} />
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
          <Route exact path="/purchase"
          render={(props) => (
            <PurchaseContainer {...props}
            items={this.state.items}
            getPurchases={this.getPurchases} />
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
      </div>
      
    )
  }
}
export default App;
