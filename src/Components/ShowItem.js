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
        alert(this.state.item.name + " added to cart!")
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
    
        fetch("http://localhost:3000/api/v1/purchases", {
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
              <div>
                  <img src={item.image} alt={item.name} />
                  <h2>{item.name}</h2>
                  <h5>${item.price}</h5>
                  <span>
                      <form className="add-to-cart" onSubmit={this.submitHandler}>
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
                            type="submit"
                            value="Add To Cart"
                            ></input>
                      </form>
                      <div>
                      <h5>Quantity: {item.quantity}</h5>
                      </div>
                  </span>
                <div className="description">
                    <h5>About</h5>
                    <p>{item.description}</p>
              </div>

              </div>

          )
      }
}

export default ShowItem