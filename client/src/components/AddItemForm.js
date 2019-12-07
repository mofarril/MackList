import React, { Component } from "react";


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
    sellerPreferedContact: false
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "productDescription") {
      value = value.substring(0, 180);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.productTitle || !this.state.productImage) {
      alert("Fill out your first and last name please!");
    } else if (this.state.productDescription.length < 6) {
      alert(
        `Choose a more secure productDescription ${this.state.productTitle} ${this.state
          .productImage}`
      );
    } else {
      alert(`Hello ${this.state.productTitle} ${this.state.productImage}`);
    }

    this.setState({
      productTitle: "",
      productImage: "",
      productDescription: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.productTitle} {this.state.productImage}
        </p>
        <form className="form">
          <input
            value={this.state.productTitle}
            name="productTitle"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.productImage}
            name="productImage"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.productDescription}
            name="productDescription"
            onChange={this.handleInputChange}
            type="productDescription"
            placeholder="productDescription"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;