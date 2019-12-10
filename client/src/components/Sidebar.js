import React, { Component } from "react";
import Axios from "axios";
import ShowAds from "./ShowAds"
import cityState from "../utils/cityState"



class Sidebar extends Component {

    state = {
        city: []
    }

    componentDidMount = () => {
        console.log("Hello 12" + JSON.stringify(cityState[0].city))
    }
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
                                    <label for="FormControlSelect">City, State</label>
                                    <select multiple className="form-control" id="FormControlSelect">
                                        {cityState.map(ele => {
                                        return <option>{ele.city}</option>
                                        })}
                                    </select>
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