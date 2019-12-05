import React, { Component } from "react";
import Wrapper from "../components/Wrapper";

class UserPost extends Component {

    state = {
        myPost: []
    }

    render() {
        return (
            <Wrapper>
                <h1>Welcome, {this.props.user}</h1>

                <div className="user-post">
                    <h3>Your posts</h3>
                    <div className= "mypost-container">
                        {this.state.myPost}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default UserPost;