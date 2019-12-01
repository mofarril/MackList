import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API"
import { Input, TextArea, FormBtn } from "../components/input";
import { Col, Row, Container } from "../components/grid";

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    render() {
        return (
            <Wrapper>
                <h1 className="text-center">Login to Macklist!</h1><br/>
                <div className="mx-5">
                <Col>
                <form>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Enter Username"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
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