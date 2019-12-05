import React, { Component } from 'react'
import axios from 'axios'
import Wrapper from "../components/Wrapper"

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
    const user = this.props.user;
    return (
      <Wrapper>
        <div>
          <nav className="navbar navbar-light bg-light">
            <h1><a className="navbar-brand" href="/">Macklist</a></h1>
            {loggedIn ?
              //     <ul className="navbar-nav">
              //       <li className="nav-item dropdown">
              //   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              //     Dropdown link
              //   </a>
              //   <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              //     <a className="dropdown-item" href="#">My Post</a>
              //     <a className="dropdown-item" href="#">Change Username</a>
              //     <a className="dropdown-item" href="#">Change Password</a>
              //     <a href="/login" className="dropdown-item" onClick={this.logout}>LogOut</a>
              //   </div>
              // </li>
              // </ul>
              <div>
                <div class="pos-f-t">
                  <nav class="navbar navbar-white bg-white">
                    <span className="mr-2">Welcome {user}! </span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  </nav>

                </div>
              </div>
              :
              <a href="/login" className="btn btn-outline-success">LogIn / SignUp</a>}
          </nav>
          {loggedIn ?
            <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-white p-4">
                <a className="text-dark h4" href="#">My Profile</a><br />
                <a className="text-dark h4" href="#">Change Username</a><br />
                <a className="text-dark h4" href="#">Change Password</a><br />
                <a href="/login" className="text-dark h4" onClick={this.logout}>LogOut</a>
              </div>
            </div>
            : null}
        </div>

      </Wrapper>
    );
  }
}

export default Navbar;