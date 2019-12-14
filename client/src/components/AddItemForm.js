import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../components/input";
import Axios from "axios";
import API from "../utils/API"
import { cityState, CitiesAndState } from "../utils/cityState"



class Form extends Component {
  // Setting the component's initial state
  constructor() {
    super()
    this.state = {
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
      // sellerPreferedContact: false
      inputPath: "",
      message: "",

      cities: []

    };

  }

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
    // console.log(event.target.files[0])
    this.setState({
      [name]: value
    });
    switch (event.target.name) {
      case "productImage":
        this.setState({ productImage: event.target.files[0] });
        break;
      default:
        this.setState({ [event.target.name]: event.target.value })
    }

  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const { productTitle, productImage, productDescription, productCost, locationCity, locationState, sellerContactName, sellerContactPhone, sellerContactEmail } = this.state;
    let formData = new FormData();

    formData.append("productImage", productImage);

    console.log("Form Data:", formData)

    Axios.post("/", formData)
      .then((result) => {
        this.setState({ inputPath: result.data })
        console.log("File uploaded :", result)
      })
      .catch(function (err) {
        console.log("Uh Oh! Error uploading: ", err)
        // alert("File failed to upload. Please check file type. JPEG and PNG files only")
      })

    API.postAd({
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
    // Notice how each input has a `value`, `name`, and `onChange` prop
    const { productTitle, productImage, productDescription, productCost, locationCity, locationState, sellerContactName, sellerContactPhone, sellerContactEmail } = this.state;
    const user = this.props.user;
    return (
      <div>
        <form action="/user-post" method="POST" encType="multipart/form-data" className="form" onSubmit={this.handleFormSubmit}>
          <h3>Ad posted by: {user}</h3>

          <label>Title (required)</label>
          <Input
            value={productTitle}
            name="productTitle"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Product Title"
          />
          <label>Image (required)</label>
          <Input
            value={productImage}
            name="productImage"
            onChange={this.handleInputChange}
            type="file"
            required
            placeholder="Product Image"
          />
          <label>Description (required)</label>
          <TextArea
            value={productDescription}
            name="productDescription"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Description"
            required
          />
          <label>Price (required)</label>
          <Input
            value={productCost}
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
            value={locationState}
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
            value={locationCity}
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
              console.log(ele)

              return <option>{ele}</option>

            })}
          </datalist>

          <label>Contact Name (required)</label>
          <Input
            value={sellerContactName}
            name="sellerContactName"
            onChange={this.handleInputChange}
            type="text"
            required
            placeholder="Contact Name"
          />
          <label>Contact Email (required)</label>
          <Input
            value={sellerContactEmail}
            name="sellerContactEmail"
            required
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <label>Contact Phone</label>
          <Input
            value={sellerContactPhone}
            name="sellerContactPhone"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Contact Phone"
            pattern="[0-9]{1,}"
            title="Please enter numeric value"
          />
          <label>Preferred Contact Method</label><br />
          <input type="radio" name="sellerPreferedContact" value="Email" /> Email<br />
          <input type="radio" name="sellerPreferedContact" value="Phone" /> Phone<br /><br />

          <button type="submit" className="btn btn-success">Submit</button>
          <p className="text-success">{this.state.message}</p>
        </form>
      </div>
    );
  }
}
export default Form;


