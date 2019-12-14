import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Form from "../components/AddItemForm";
import adCard from "./index";
import ShowAd from "../ShowAds";


class showFullAdModal extends Component {
    state = {
        owner: "",
        productTitle: "",
        productImage: "",
        productDescription: "",
        productCost: "",

        locationCity: "",
        locationState: "",

        sellerContactName: "",
        sellerContactPhone: "",
        sellerContactEmail: "",
        message: "",

        cities: []

    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        //this needs to get all the information from the AddItemForm and show it in a modal once Ad is clicked
        
        API.getAd({
            owner: this.props.user,
            productTitle: this.state.productTitle,
            productImage: this.state.productImage,
            productDescription: this.state.productDescription,
            productCost: this.state.productCost,

            locationCity: this.state.locationCity,
            locationState: this.state.locationState,

            sellerContactName: this.state.sellerContactName,
            sellerContactPhone: this.state.sellerContactPhone,
            sellerContactEmail: this.state.sellerContactEmail,
        }).then(results => {
            console.log(results);
            this.setState({
                productTitle: "",
                productImage: "",
                productDescription: "",
                productCost: "",

                locationCity: "",
                locationState: "",

                sellerContactName: "",
                sellerContactPhone: "",
                sellerContactEmail: "",
                message: "Item added Successfully"
            });
        }).catch(err => console.log(err));


    };
    render() {

        return (
            <Wrapper>

                <div>
                    <div className="text-center">

                        <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalLong">
                                            Contact Seller</button></div>
                                    <Form user={user} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        )
    }
}

export default showFullAdModal;