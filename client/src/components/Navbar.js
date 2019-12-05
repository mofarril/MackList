import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'

class Navbar extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
}

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('api/users/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1><a className="navbar-brand" href="/">Macklist</a></h1>
          {loggedIn ? <a href="/login" className="btn btn-outline-success" onClick={this.logout}>LogOut</a> :
            <a href="/login" className="btn btn-outline-success">LogIn / SignUp</a>}

        </nav>
      </div>

    );
  }
}

export default Navbar;