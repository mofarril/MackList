import React, { Component } from "react";
import UserNavbar from '../components/UserNavbar';
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class User extends Component{

  state = {
    user: ""
  }

  componentDidMount() {
    console.log("ok");
  }

render() {
  return (
    <Wrapper>
      <UserNavbar user={this.state.user} />
    </Wrapper>
  )
}
}

export default User;
