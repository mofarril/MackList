import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Wrapper from "../components/Wrapper";
import axios from "axios"
import Sidebar from "../components/Sidebar"
import AdCard from "../components/ad/index";
import API from "../utils/API"



class Home extends Component {



  render() {
    return (
      <Wrapper>
        <Sidebar className="fixed-top" />
       </Wrapper> 
)}
    }

export default Home;
