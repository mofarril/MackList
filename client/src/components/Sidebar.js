import React, { Component } from "react";
import Axios from "axios";
import ShowAds from "./ShowAds"
import { CitiesAndState } from "../utils/cityState"



class Sidebar extends Component {

    state = {
        cities: [],
        locationCity: "",
        locationState: "",
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
            <div className="row">
                <div className="col-lg-3">
                    <nav className="nav flex-column bg-dark">
                        <a className="nav-link active" href="#collapseExample">Deparments</a>
                        <a className="btn btn-success" data-toggle="collapse" href="#cars" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Cars </a>
                        <div className="collapse" id="cars">
                            <div className="card card-body">
                                <div className="form-group">
                                    <label for="FormControlSelect">State(required)</label>
                                    <input
                                        type="text"
                                        value={this.state.locationState}
                                        name="locationState"
                                        onChange={this.handleInputChange}
                                        placeholder="State"
                                        required
                                        list="state" className="form-control">
                                    </input>
                                    <datalist id="state">
                                        {CitiesAndState.map(ele => {
                                            //  console.log(ele)
                                            return <option>{ele.state}</option>
                                        })}
                                    </datalist>

                                    <label for="FormControlSelect">City</label>
                                    <input
                                        type="text"
                                        value={this.state.locationCity}
                                        name="locationCity"
                                        onChange={this.handleInputChange}
                                        onFocus={this.updateCities}
                                        placeholder="City"
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
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={this.lowTohigh}></input>
                                    <label className="form-check-label" for="exampleRadios1">
                                        <a className="text-primary">lowTohigh</a>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={this.highTolow}></input>
                                    <label className="form-check-label" for="exampleRadios2">
                                        <a className="text-primary">highTolow</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <a className="nav-link" href="#">Deparments</a>
                        <a className="btn btn-success" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Category </a>
                        <div className="collapse" id="collapseExample2">
                            <div className="card card-body">
                                <div className="form-group">
                                    <label for="FormControlSelect">City, State</label>
                                    <select multiple class="form-control" id="FormControlSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={this.lowTohigh}></input>
                                    <label class="form-check-label" for="exampleRadios1">
                                        <a className="text-primary">lowTohigh</a>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={this.highTolow}></input>
                                    <label class="form-check-label" for="exampleRadios2">
                                        <a className="text-primary">highTolow</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <a className="nav-link" href="#">Deparments</a>
                        <a className="btn btn-success" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Category </a>
                        <div className="collapse" id="collapseExample3">
                            <div className="card card-body">
                                <div class="form-group">
                                    <label for="FormControlSelect">City, State</label>
                                    <select multiple class="form-control" id="FormControlSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={this.lowTohigh}></input>
                                    <label class="form-check-label" for="exampleRadios1">
                                        <a className="text-primary">lowTohigh</a>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={this.highTolow}></input>
                                    <label class="form-check-label" for="exampleRadios2">
                                        <a className="text-primary">highTolow</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <a className="nav-link" href="#">Deparments</a>
                        <a className="btn btn-success" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Category </a>
                        <div className="collapse" id="collapseExample4">
                            <div className="card card-body">
                                <div class="form-group">
                                    <label for="FormControlSelect">City, State</label>
                                    <select multiple class="form-control" id="FormControlSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={this.lowTohigh}></input>
                                    <label class="form-check-label" for="exampleRadios1">
                                        <a className="text-primary">lowTohigh</a>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={this.highTolow}></input>
                                    <label class="form-check-label" for="exampleRadios2">
                                        <a className="text-primary">highTolow</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <ShowAds />
                </div>
            </div>
        )
    }
}

export default Sidebar