import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Wrapper from "../components/Wrapper";
import axios from "axios"
import Sidebar from "../components/Sidebar"
import AdCard from "../components/ad/index";
import API from "../utils/API"



class Home extends Component {

  state = {
    allposts: []
  }

  componentDidMount = () => {
    API.getAd({})
      .then(results => {
        this.setState({ allposts: results.data })
        // console.log(results)
        console.log(this.state.allposts)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Sidebar className= "fixed-top" />
        {/* {this.state.allposts.map(ele => {
          console.log(ele);
          return <AdCard
            name= {ele.productTitle}
            price=  {" $" + ele.productCost}
            image= {ele.productImage}
          />

        })} */}


      </Wrapper>
    )
  }
}

export default Home;
