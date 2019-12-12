import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Form from "../components/AddItemForm"
class UserPost extends Component {

    render() {
        const loggedIn = this.props.loggedIn;
        const user = this.props.user;
        return (
            <Wrapper>
                {loggedIn ?
                <div>
                    <div className="text-center">
                    <h1 >Welcome {user}!</h1>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalLong">
                        Create Post</button></div>
                    <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Product Form</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Form user={user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    : <h1 className="text-center">Please LogIn to use this page!</h1>}
            </Wrapper>
        )
    }
}

export default UserPost;