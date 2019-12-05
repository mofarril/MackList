import React, { Component } from "react";
import Axios from "axios";



class Sidebar extends Component {
    lowTohigh = () => {
        Axios.get("/api/ads/lowTohigh")
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div class="row">
                <div class="col-lg-3">
                    <div class="pos-f-t">
                        <button class="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse" id="navbarToggleExternalContent">
                            <nav class="nav flex-column bg-dark">
                                <a class="nav-link active" href="#collapseExample">Deparments</a>
                                <a class="btn btn-primary" data-toggle="collapse" href="#cars" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Cars </a>
                                <div class="collapse" id="cars">
                                    <div class="card card-body">
                                        <a class="nav-link text-primary" href="#lowPrice" onClick={this.lowTohigh}>lowTohigh</a>
                                        <a class="nav-link text-primary" href="#highPrice">highPrice</a>{}
                                    </div>
                                </div>
                                <a class="nav-link" href="#">Deparments</a>
                                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Category </a>
                                <div class="collapse" id="collapseExample2">
                                    <div class="card card-body">
                                        links of categories
                                </div>
                                </div>
                                <a class="nav-link" href="#">Deparments</a>
                                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Category </a>
                                <div class="collapse" id="collapseExample3">
                                    <div class="card card-body">
                                        links of categories
                                </div>
                                </div>
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Deparments</a>
                                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Category </a>
                                <div class="collapse" id="collapseExample4">
                                    <div class="card card-body">
                                        links of categories
                                </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <div id="lowPrice">
                    jsx of lowPrice function here
                </div> */}
                <div class="col-lg-9">
                    <h1>testing</h1>
                </div>
            </div>
        )
    }
}

export default Sidebar