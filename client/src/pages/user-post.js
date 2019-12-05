import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import mongoose from "mongoose"

class UserPost extends Component {

    state = {
        myPost: []
    }

    render() {
        return (
            <Wrapper>
                <h1>Welcome, {this.props.user}</h1>

                <div className= "user-post">
                    <h3>Your posts</h3>
                    {this.state.myPost}
                </div>
            </Wrapper>
        )
    }
}

export default UserPost;