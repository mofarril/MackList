import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API"
import { Input, TextArea, FormBtn } from "../components/input";
import { Col, Row, Container } from "../components/grid";

class Login extends Component {

    state = {
        username: "",
        password: "",
        error: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.getUser(this.state.username)
            .then(results => {
                if(results.data.length>0){
                    API.getPassword(this.state.password)
                    .then(results => {
                        if(results.data.length>0){
                            window.location.href="/"
                        }else{
                            this.setState({error: "Username or Password is incorrect"})
                        }
                    })
                    .catch(err => console.log(err));
                }else{
                    this.setState({error: "Username or Password is incorrect"})
                }
            })
            .catch(err => console.log(err));
        }
    }
    
    render() {
        return (
            <Wrapper>
                <h1 className="text-center">Login to Macklist!</h1><br/>
                <div className="mx-5">
                <Col>
                <form>
                <p>{this.state.error}</p>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Log In
              </FormBtn>
                </form>
                <a className="btn btn-success" href="/signup">Signup</a><br/>
                <a className="btn btn-success mt-2" href="/forgotPassword">Forgot Password</a><br/>
                <a href="/" className="btn btn-success mt-2">Home Page</a>
                </Col>
                </div>
            </Wrapper>
        )
    }
}

export default Login;