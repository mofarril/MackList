import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/input";

class Signup extends Component{

    state ={
        username: "",
        email:"",
        password: ""
    }

    render(){
        return(
            <Wrapper>
                <h1 className="text-center">Signup to Macklist!</h1>
            </Wrapper>
        )
    }
}

export default Signup;