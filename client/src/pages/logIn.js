import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API"
import { Input, TextArea, FormBtn } from "../components/input";
import { Col, Row, Container } from "../components/grid";
import axios from "axios"
import { Redirect } from 'react-router-dom'

class Login extends Component {

    state = {
        username: "",
        password: "",
        error: "",
        redirectTo: null
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.username && this.state.password) {
        //     console.log(this.state.username)
        //     API.loginUser([{
        //         username: this.state.username,
        //         password: this.state.password
        //     }])
        //     .then(results => {
        //         console.log(results)
        //         if(results.data === "success"){
        //             window.location.href="/"
        //                 }else{
        //                     this.setState({error: "Username or Password is incorrect"})
        //                 }
        //     })
        //     .catch(err => console.log(err));
        // }

        axios
            .post('/api/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    //update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                   
                }
            }).catch(error => {
                console.log('login error: ')
                this.setState({error: "Username or Password is incorrect"})
                console.log(error);
            })
    }
    
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
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
                <span>Don't remember your password? </span><a className="mt-2 text-success" href="/forgotPassword">Forgot Password</a><br/>
                <span>Not a member yet?</span><a className="ml-2 text-success" href="/signup">Signup</a><br/>
                </Col>
                </div>
            </Wrapper>
        )}
    }
}

export default Login;