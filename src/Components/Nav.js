import React from "react"
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
        this.props.searchHandler(this.state.searchItem)
        this.setState({ searchItem: "" })
      }
    
    render() {
        return (
            <Navbar expand="md" bg="light" variant="light" >
                <Navbar.Brand href="/">Antiquer</Navbar.Brand>
                <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    name="searchItem"
                    value={this.state.searchItem}
                    onChange={this.changeHandler}
                />
                <Link to="/search">
                    <Button
                        variant="outline-warning"
                        onClick={this.submitHandler}
                    >
                        Search
                    </Button>
                </Link>
                </Form>
                
                <Nav className="mr-auto">
                    <Nav.Link
                        href={"/antiques"}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        onClick={this.navBarFilter}
                    >
                        Antiques
                    </Nav.Link>   
                    {/* <Nav.Link
                        href={"/account"}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        onClick={this.navBarFilter}
                        >
                     My Account
                    </Nav.Link>       */}
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