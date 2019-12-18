import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../components/input";
import API from "../utils/API"
import { CitiesAndState } from "../utils/cityState"
import { Department } from "../utils/department"
import Axios from "axios";

class Form extends Component {
  // Setting the component's initial state
  state = {
    owner: "",
    productTitle: "",
    productImage: "",
    productDescription: "",
    productDepartment: "",
    productCost: "",

    locationCity: "",
    locationState: "",

    sellerContactName: "",
    sellerContactPhone: "",
    sellerContactEmail: "",
    message: "",

    cities: []
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this),
    // this.fileUpload = this.fileUpload.bind(this)
  };

  updateCities = () => {
    const arr = CitiesAndState.filter(ele => {
      return ele.state === this.state.locationState
    })
    var arr1 = []
    arr.map(ele => {
      console.log(ele)
      for (let i = 0; i < ele.cities.length; i++) {
        arr1.push(ele.cities[i])
      }
    })
    this.setState({ cities: arr1 })
    console.log(this.state.cities)
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
    // this.setState({ productImage: event.target.pr[0] })
  };

  handleFileChange = event => {
    // const { name, files } = event.target;
    this.setState({
      productImage: event.target.files[0] 
    });
    console.log(event.target.files[0]);
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const formData = new FormData();
    //formData.append("productImage", this.state.productImage)
    formData.append("owner", this.props.user)
    formData.append("productTitle", this.state.productTitle)
    formData.append("productImage", this.state.productImage)
    formData.append("productDescription", this.state.productDescription)
    formData.append("productDepartment", this.state.productDepartment)
    formData.append("productCost", this.state.productCost)

    formData.append("locationCity", this.state.locationCity)
    formData.append("locationState", this.state.locationState)

    formData.append("sellerContactName", this.state.sellerContactName)
    formData.append("sellerContactPhone", this.state.sellerContactPhone)
    formData.append("sellerContactEmail", this.state.sellerContactEmail)
  const config = {
      header: {
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("/api/images",formData,config)
    .then((response) => {
      console.log(response)
        alert("The file is successfully uploaded");
    }).catch((error) => {
      console.log(error);
});    
    // API.postAd({
    //   owner: this.props.user,
    //   productTitle: this.state.productTitle,
    //   productImage: this.state.productImage,
    //   productDescription: this.state.productDescription,
    //   productDepartment: this.state.productDepartment,
    //   productCost: this.state.productCost,

    //   locationCity: this.state.locationCity,
    //   locationState: this.state.locationState,

    //   sellerContactName: this.state.sellerContactName,
    //   sellerContactPhone: this.state.sellerContactPhone,
    //   sellerContactEmail: this.state.sellerContactEmail,
    // }).then(results => {
    //   this.setState({
    //     productTitle: "",
    //     productImage: "",
    //     productDescription: "",
    //     productCost: "",

    //     locationCity: "",
    //     locationState: "",

    //     sellerContactName: "",
    //     sellerContactPhone: "",
    //     sellerContactEmail: "",
    //     message: "Item added Successfully"
    //   });
    // }).catch(err => console.log(err));


  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    const user = this.props.user;
    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <h3>Ad posted by: {user}</h3>

          <label>Title (required)</label>
          <Input
            value={this.state.productTitle}
            name="productTitle"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Product Title"
          />
          <label>Image (required)</label>
          <Input
            name="productImage"
            onChange={this.handleFileChange}
            type="file"
            required
            placeholder="Product Image"
          />
          <label>Description (required)</label>
          <TextArea
            value={this.state.productDescription}
            name="productDescription"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Description"
            required
          />
          <label>Department (required)</label>
          <Input
            value={this.state.productDepartment}
            name="productDepartment"
            list="department"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Department"
          />

          <datalist id="department">
            {Department.map(ele => {
              //  console.log(ele)
              return <option>{ele.department}</option>
            })}
          </datalist>
          <label>Price (required)</label>
          <Input
            value={this.state.productCost}
            name="productCost"
            onChange={this.handleInputChange}
            type="text"
            pattern="[0-9]{1,}"
            placeholder="Price"
            required
            title="Please enter numeric value"
          />
          <label>State (required)</label>
          <Input
            value={this.state.locationState}
            name="locationState"
            list="state"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="State"
          />

          <datalist id="state">
            {CitiesAndState.map(ele => {
              //  console.log(ele)
              return <option>{ele.state}</option>
            })}
          </datalist>

          <label>City (required)</label>
          <Input
            value={this.state.locationCity}
            name="locationCity"
            list="city"
            onChange={this.handleInputChange}
            onFocus={this.updateCities}
            type="text"
            placeholder="City"
            required
          />
          <datalist id="city">
            {this.state.cities.map(ele => {
              // console.log(ele)

              return <option>{ele}</option>

            })}
          </datalist>

          <label>Contact Name (required)</label>
          <Input
            value={this.state.sellerContactName}
            name="sellerContactName"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Contact Name"
          />
          <label>Contact Email (required)</label>
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
            placeholder="Contact Phone"
            pattern="[0-9]{1,}"
            title="Please enter numeric value"
          />

          <button type="submit" className="btn btn-success">Submit</button>
          <p className="text-success">{this.state.message}</p>
        </form>
      </div>
    );
  }
}
export default Form;














