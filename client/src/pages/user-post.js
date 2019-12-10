import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Form from "../components/AddItemForm"
class UserPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('http://localhost:3000/', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:3000/${body.file}` });
            });
        });
    }


    ImageSelectHandler = event => {
        console.log(event)
    }

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
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" for="#customFile">Choose file</label>
                                    <Form />
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