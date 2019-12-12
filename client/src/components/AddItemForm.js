import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../components/input";
import Axios from "axios";


class Form extends Component {
  // Setting the component's initial state
  state = {
    productTitle: "",
    productImage: "",
    productDescription: "",
    productCost: "",

    locationCity: "",
    locationState: "",

    sellerContactName: "",
    sellerContactPhone: "",
    sellerContactEmail: "",
    // sellerPreferedContact: false
    imagePath: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
        this.setState({
            [name]: value
        });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.productTitle || !this.state.productImage || !this.state.locationCity || this.state.sellerContactEmail) {
    //   alert("Fill out the Required Fields of your post please!");
    // } else if (this.state.productDescription.length < 6) {

    // }
    // this.setState({
    //   productTitle: "",
    //   productImage: "",
    //   productDescription: "",
    //   productCost: "",

    //   locationCity: "",
    //   locationState: "",

    //   sellerContactName: "",
    //   sellerContactPhone: "",
    //   sellerContactEmail: "",
    //   sellerPreferedContact: ""

    // });
    const {productTitle, productImage,productDescription,productCost,locationCity,locationState,sellerContactName,sellerContactPhone,sellerContactEmail} = this.state;
    let formData = new FormData();

    // formData.append("productTitle", productTitle);
    formData.append("productImage", productImage);
    // formData.append("productDescription", productDescription);
    // formData.append("productCost", productCost);
    // formData.append("locationCity", locationCity);
    // formData.append("locationState",locationState);
    // formData.append("sellerContatName", sellerContactName);
    // formData.append("sellerContactPhone", sellerContactPhone);
    // formData.append("sellerContactEmail", sellerContactEmail);

    console.log("Form Data:", formData)

    // Axios.post("/", formData)
    // .then((result) => {
    //   this.setState({imagePath: result.data})
    //   console.log("File uploaded :", result)
    // }) 
    // .catch(function(err){
    //   console.log("Uh Oh! Error uploading: ", err)
    //   alert("File failed to upload. Please check file type. JPEG and PNG files only")
    // })

    Axios({
      url:"http://localhost:3000/user-post",
      method: "POST",
    })
    .then((res)=>{
       this.setState({imagePath: res.data.path})
       console.log("File uploaded!: ", res)
    })
    .catch(function(err){
      console.log("Uh Oh! Error uploading: ", err)
      alert("File failed to upload. Please check file type. JPEG and PNG files only")
    })

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Selling: {this.state.productTitle} {this.state.productImage}
        </p>
        <form encType="multipart/form-data" className="form" onSubmit={this.handleFormSubmit}>
          <label>Title</label>
          <Input
            value={this.state.productTitle}
            name="productTitle"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Product Title"
          />
          <label>Image</label>
          <Input
            value={this.state.productImage}
            name="productImage"
            onChange={this.handleInputChange}
            type="file"
            required
            placeholder="Product Image"
          />
          <label>Description</label>
          <TextArea
            value={this.state.productDescription}
            name="productDescription"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Description"
            required
          />
          <label>Price</label>
          <Input
            value={this.state.productCost}
            name="productCost"
            onChange={this.handleInputChange}
            type="text"
            pattern="[0-9]{1,}"
            placeholder="Price"
            required
            title = "Please enter numeric value"
          />
          <label>City</label>
          <Input
            value={this.state.locationCity}
            name="locationCity"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
            required
          />
          <label>State</label>
          <Input
            value={this.state.locationState}
            name="locationState"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="State"
          />
          <label>Contact Name</label>
          <Input
            value={this.state.sellerContactName}
            name="sellerContactName"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Contact Name"
          />
          <label>Contact Email</label>
          <Input
            value={this.state.sellerContactEmail}
            name="sellerContactEmail"
            required
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <label>Contact Phone</label>
          <Input
            value={this.state.sellerContactPhone}
            name="sellerContactPhone"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Contact Phone"
            pattern="[0-9]{1,}"
            title = "Please enter numeric value"
          />
          <label>Preferred Contact Method</label><br/>
          <input type="radio" name="sellerContactEmail" value="Email" /> Email<br/>
          <input type="radio" name="sellerCPhone" value="Phone" /> Phone<br/><br/>
          
          <button  type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;