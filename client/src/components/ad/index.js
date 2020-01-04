import React from "react";
import Wrapper from "../Wrapper";

const styles = {
    adCard: {
        width: "33%",
        background: "rgba(216, 213, 213, 0.01)",
        float: "left",
       //border: "3px solid black"        
    }
};
export function AdCard(props) {
    return (

        <div className="card-deck ml-2 my-3" style={styles.adCard} {...props}>
            <div className="card">
            <p className="card-text font-weight-light">{props.price}</p>
                <img src={props.image} className="card-img-top my-3" alt={props.name} height = "200px" width = "350px"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        </div>

    );
}

export function AdCard1(props) {
    return (
        <Wrapper>
            <div className="card-deck ml-2" style={styles.adCard} {...props}>
                <div className="card">
                <p className="card-text">{props.price}</p>
                    <img src={props.image} className="card-img-top" alt={props.name} height = "250px" width = "350px"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        
                    </div>
                    {props.children}
                </div>
            </div>
        </Wrapper>
    );
}
