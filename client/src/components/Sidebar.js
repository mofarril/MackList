import React, { Component } from "react";
import Axios from "axios";
import ShowAds from "./ShowAds"
import { CitiesAndState } from "../utils/cityState"
import { Department } from "../utils/department"
import API from "../utils/API"
import AdCard from "../components/ad/index";
import Wrapper from "../components/Wrapper";
const styles = {
    search: {
        "height": "480px",
        "border": "1px solid black",
        // "position":"absolute",
        // "top": "0",
        // "bottom": "0"
    },
    width: {
        "width": "100%"
    }
}
class Sidebar extends Component {
    state = {
        cities: [],
        locationCity: "",
        locationState: "",
        department: "",
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

    };
    lowTohigh = () => {
        Axios.get("/api/ads/lowTohigh")
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    highTolow = () => {
        Axios.get("/api/ads/highTolow")
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <Wrapper>
            <div className="row">
                <div className="col-sm-12">
                    <nav className="nav flex-column bg-light" >
                        <div className="btn btn-success" role="button" style={styles.width}>
                            Advanced Search </div> </nav></div>
​
                <div className="card-body row ml-3">
                    <div className="form-group col-sm-3">
                        <label for="FormControlSelect">Department</label>
                        <input
                            type="text"
                            value={this.state.department}
                            name="department"
                            onChange={this.handleInputChange}
                            placeholder=" Select Department"
                            required
                            list="department" className="form-control">
                        </input>
                        <datalist id="department">
                            {Department.map(ele => {
                                //  console.log(ele)
                                return <option>{ele.department}</option>
                            })}
                        </datalist>
                    </div>
                    <div className="form-group col-sm-3">
                        <label for="FormControlSelect">State(required)</label>
                        <input
                            type="text"
                            value={this.state.locationState}
                            name="locationState"
                            onChange={this.handleInputChange}
                            placeholder=" Select State"
                            required
                            list="state" className="form-control">
                        </input>
                        <datalist id="state">
                            {CitiesAndState.map(ele => {
                                //  console.log(ele)
                                return <option>{ele.state}</option>
                            })}
                        </datalist>
                    </div>
                    <div className="form-group col-sm-3">
                        <label for="FormControlSelect">City</label>
                        <input
                            type="text"
                            value={this.state.locationCity}
                            name="locationCity"
                            onChange={this.handleInputChange}
                            onFocus={this.updateCities}
                            placeholder=" Select City"
                            required
                            list="city" className="form-control">
                        </input>
                        <datalist id="city">
                            {this.state.cities.map(ele => {
                                console.log(ele)
                                return <option>{ele}</option>
                            })}
                        </datalist>
                    </div>
                    <div className="col-sm-2">
                        <div className="row">
                            <label className="col-sm-12">Filter by Price</label>
                        </div>
                        <div className="row">
                            <div className="form-check col-sm-6">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={this.lowTohigh}></input>
                                <label className="form-check-label" for="exampleRadios1">
                                    <a className="text-primary">lowTohigh</a>
                                </label>
                            </div>
                            <div className="form-check col-sm-6">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={this.highTolow}></input>
                                <label className="form-check-label" for="exampleRadios2">
                                    <a className="text-primary">highTolow</a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
​
​
                
                {/* <div className="col-lg-9">
                    <ShowAds />
                </div> */}
            </div>
            {this.state.allposts.map(ele => {
                    console.log(ele);
                    return <AdCard
                        name={ele.productTitle}
                        price={" $" + ele.productCost}
                        image={ele.productImage}
                    />

                })}
            </Wrapper>
        )
    }
}
export default Sidebar;