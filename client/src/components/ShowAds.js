import React, { Component }  from "react";
import Axios from "axios"

class ShowAds extends Component {
    ShowAd = () => {
        Axios.get("/")
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container">
                <div className="card-columns">
                    {this.ShowAd}
                </div>
            </div>
        )
    }
}

export default ShowAds