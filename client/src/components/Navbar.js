import React, { Component } from "react";
import $ from "jquery";

class Navbar extends Component {

  logIn = () => {
    $("#logIn").show();
    $("#signUp").hide();
    $("#forgotPassword").hide();
    $("#loginModalLabel").text("LogIn to Macklist");
  }

  signUp = () => {
    $("#logIn").hide();
    $("#signUp").show();
    $("#forgotPassword").hide();
    $("#loginModalLabel").text("SignUp to Macklist");
  }

  forgotPassword = () => {
    $("#logIn").hide();
    $("#signUp").hide();
    $("#forgotPassword").show();
    $("#loginModalLabel").text("Forgot Password!");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1><a className="navbar-brand" href="/">Macklist</a></h1>
          <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#loginModal" onClick = {this.logIn}>LogIn / SignUp</button>
        </nav>

        {/*  Modal */}

        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div id="logIn">
                  <form>
                    <div className="form-group">
                      <label for="exampleInputEmail1">User Name</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-outline-success">Log In</button>
                  </form><br />
                  <button type="submit" className="btn btn-outline-primary mr-3" onClick = {this.forgotPassword}>Forgot Password</button>
                  <button type="submit" className="btn btn-outline-primary" onClick = {this.signUp}>Sign up</button>
                </div>

                <div id="signUp">
                  <form>
                    <div className="form-group">
                      <label for="exampleInputEmail1">User Name</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-muted">Username should be alphanumberic</small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email Address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                      <small id="emailHelp" className="form-text text-muted">Password must contain atleast 1 uppercase, 1 lowercase and 1 numeric</small>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Sign up</button>
                  </form><br />
                  <button type="submit" className="btn btn-outline-primary" onClick = {this.logIn}>Log In</button>
                </div>

                <div id="forgotPassword">
                  <form>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email Address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-muted">Please provide the email address of your account!</small>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                  </form><br />
                  <button type="submit" className="btn btn-outline-primary mr-3" onClick = {this.logIn}>Log In</button>
                  <button type="submit" className="btn btn-outline-primary" onClick = {this.signUp}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Navbar;