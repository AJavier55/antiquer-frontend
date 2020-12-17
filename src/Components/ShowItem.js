import React from "react"

class ShowItem extends React.Component {
    state = {
        item: [],
        quantity: 1,
    }
    componentDidMount() {
        let item = this.props.items.find(
          (item) => item.id === parseInt(this.props.match.params.id)
        )
        this.setState({ item: item })
      }    
    
      createCart = () => {
        let quantity = parseInt(this.state.quantity)
        let itemQuantity = parseInt(this.state.item.quantity)
        let item_id = parseInt(this.state.item.id)
        let cartItem = {
          user_id: 0,
          item_id: item_id,
          quantity: quantity,
          sold: false,
          itemQuantity: itemQuantity,
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
      
      submitHandler = (e) => {
        e.preventDefault()
        this.createCart()
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
                  <h5>Quantity: {item.quantity}</h5>
                  <span>
                      <form className="add-to-cart" onSubmit={this.submitHandler}>
                          <input
                            name="quantity"
                            type="number"
                            label="Quantity"
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
                  </span>
                <div className="description">
                    <h5>Description</h5>
                    <p>{item.description}</p>
              </div>

              </div>

          )
      }
}

export default ShowItem