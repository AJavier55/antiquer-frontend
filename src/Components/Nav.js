import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { FormControl } from "react-bootstrap"
import { Form } from "react-bootstrap"


export class NavBar extends React.Component {
    state = {
        searchItem: "",
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }

     onMouseEnter = () => {}

     onMouseLeave = () => {}

      submitHandler = () => {
        this.props.searchHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
      }
    
    render() {
        return (
            <Navbar expand="lg">
                <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    // className="mr-sm-2"
                    name="searchItem"
                    value={this.state.searchItem}
                    onChange={this.changeHandler}
                />
                <Link to="/search">
                    <Button
                        variant="outline-primary"
                        onClick={this.submitHandler}
                    >
                        Search
                    </Button>
                </Link>
                </Form>
                
                <Nav className="antique-nav">
                    <Nav.Link
                        href={"/items"}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        onClick={this.navBarFilter}
                    >
                        Antiques
                    </Nav.Link>         
                    <Nav.Link
                        href={"/sell-item"}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        onClick={this.navBarFilter}
                    >
                        Sell 
                    </Nav.Link>
                    <Nav.Link href="/purchase">
                        Cart           
                    </Nav.Link>

                </Nav>
            </Navbar>
        )
    }
}

export default NavBar