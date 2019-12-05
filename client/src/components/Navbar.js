import React, { Component } from 'react'
import axios from 'axios'
import Wrapper from "../components/Wrapper"
import { Input, TextArea, FormBtn } from "../components/input";
import API from "../utils/API";
const bcrypt = require('bcryptjs');


class Navbar extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  state = {
    username: "",
    password: "",
    error:""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  changeUsername = (event) => {
    event.preventDefault();
    const user = this.props.user;
    console.log( "Hello " + user);
    API.getUser(this.state.username)
    .then(results => {
      if(results.data.length > 0){
        this.setState({error: "Username already exist. Please try another username"})
      }else{
        console.log( "Hello123 " + user);
        API.updateUser({
          newuser: this.state.username,
          olduser: user
        }).then(res =>{
          this.setState({error: "Username has been changed. Logout and Log back in for changes to take place."})
        }).catch(err => console.log(err));
      }
    }).catch(err => console.log(err));
  }

  changePassword = (event) => {
    event.preventDefault();
    const user = this.props.user;
    const newPassword = bcrypt.hashSync(this.state.password, 10)
    API.updatePassword({
      username: user,
      password: newPassword
    }).then(res => {
      this.setState({error: "Password has been changed. Logout and Log back in for changes to take place."})
    }).catch(err => console.log(err));
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
        window.location.href = "/";
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
              <div>
                <div className="pos-f-t">
                  <nav className="navbar navbar-white bg-white">
                    <span className="mr-2">Welcome {user}! </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </nav>

                </div>
              </div>
              :
              <a href="/login" className="btn btn-outline-success">LogIn / SignUp</a>}
          </nav>
          {loggedIn ?
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-white p-4">
                <a className="text-dark h4" href="/user-post">My Profile</a><br />
                <a className="text-dark h4" href="#" data-toggle="modal" data-target="#changeusername">Change Username</a><br />
                <a className="text-dark h4" href="#" data-toggle="modal" data-target="#changepassword">Change Password</a><br />
                <a href="/" className="text-dark h4" onClick={this.logout}>LogOut</a>
              </div>
            </div>
            : null}
        </div>


                {/* <!-- Change Username Modal --> */}
<div className="modal fade" id="changeusername" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Change Username</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
                <p>{this.state.error}</p>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        type="text"
                        placeholder="Enter New Username"
                    />
                    <FormBtn
                        disabled={!(this.state.username)}
                        onClick={this.changeUsername}
                    >
                        Change Username
              </FormBtn>
              <div>
              <FormBtn data-dismiss="modal">Close</FormBtn>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>


                       {/* <!-- Change Password Modal --> */}
<div className="modal fade" id="changepassword" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
                <p>{this.state.error}</p>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Enter New Password"
                    />
                    <FormBtn
                        disabled={!(this.state.password)}
                        onClick={this.changePassword}
                    >
                        Change Password
              </FormBtn>
              <div>
              <FormBtn data-dismiss="modal">Close</FormBtn>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </Wrapper>
    );
  }
}

export default Navbar;