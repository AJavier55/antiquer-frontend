import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

export class Nav extends React.Component {
    render() {
        return (
    <div className="navbar">
        <div style={{ backgroundColor: 'black', borderBottom: '3px solid black', paddingTop: '20px', paddingLeft: '20px', paddingBottom: '20px', marginBottom: '3px'}}>
        <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/home"
              >
                Home
              </NavLink>
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/myfavorites"
              >
                My Favorites
              </NavLink>
        </div>
    </div>
        )
    }
}

export default Nav