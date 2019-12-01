import React, { Component } from "react";
import UserNavbar from '../components/UserNavbar';
import Wrapper from "../components/Wrapper"

class User extends Component{
render() {
  return (
    <Wrapper>
      <UserNavbar user="Atif" />
    </Wrapper>
  )
}
}

export default User;
