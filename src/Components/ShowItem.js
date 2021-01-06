import React from "react"

class ShowItem extends React.Component {
    state = {
        item: [],
        quantityOfItems: 1,
    }
    componentDidMount() {
        let item = this.props.items.find(
          (item) => item.id === parseInt(this.props.match.params.id)
        )
        this.setState({ item: item })
      }   
      
      submitHandler = (e) => {
        e.preventDefault()
        this.createCart()
        alert(" added to cart!")
      }
    
      createCart = () => {
        let item_id = parseInt(this.state.item.id)
        let quantity = parseInt(this.state.quantityOfItems)
        let quantityAvailable = parseInt(this.state.item.quantity) 
        let cartItem = {
          user_id: 39,
          item_id: item_id,
          quantity: quantity,
          sold: false,
          quantityAvailable: quantityAvailable,
        }
    
        fetch("http://localhost:3000/purchases", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(cartItem),
        })
      }
      
     

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
      
      render() {
          let item = this.state.item
          return (
              <div className="show-item-div">
                <div className="show-left">
                <div className="show-image">
                <img src={item.image} alt={item.name} />
                </div>
                </div>
                <div className="show-right">
                  <div className="item-info">
                  <h2>{item.name}</h2>
                  <div className="price">
                    <div className="show-item-price">
                      <h5>Price: ${item.price}</h5>
                    </div>
                    <div className="add-to-cart">
                      <span>
                      <form className="add-item-to-cart" onSubmit={this.submitHandler}>
                          <input
                            type="number"
                            label="quantity"
                            placeholder="#"
                            defaultValue="1"
                            min="1"
                            max={item.quantity}
                            value={this.state.quantity}
                            onChange={this.changeHandler}
                          ></input>
                          <input
                          className="add-to-cart-button"
                            type="submit"
                            value="Add To Cart"
                            ></input>
                      </form>
                      </span>
                    </div>
                    <div className="available-quantity">
                    <h5>Available Quantity: {item.quantity}</h5>
                    </div>
                  </div>
                  </div>
                <div className="show-bottom">
                    <div className="show-description">
                    <h5>About</h5>
                    <p>{item.description}</p>

                    </div>
                </div>
                </div>
                  
              </div>

          )
      }
}

export default ShowItem