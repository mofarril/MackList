import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Wrapper from "../components/Wrapper";
import axios from "axios"
import Sidebar from "../components/Sidebar"

class Home extends Component {

  render() {
    return (
      <Wrapper>
        <Sidebar />
        <h1>All the ads will be here.</h1>
      
      </Wrapper>
    )
  }
}

export default Home;
