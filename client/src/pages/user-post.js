import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";

class UserPost extends Component {

    ImageSelectHandler = event => {
        console.log(event)
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <h1>User post shown here</h1>
                </div>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                    Create Post</button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Upload Image</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <input type="file" class="custom-file-input" id="customFile"/>
                            <label class="custom-file-label" for="customFile">Choose file</label>
                            Item Description:<input type="textarea" className="description"></input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default UserPost;