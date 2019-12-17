import React from "react";
import Wrapper from "../Wrapper";
const styles = {
    adCard: {
        width: "33%",
        background: "white",
        float: "left"
    },
    headName: {
        "text-align": "center"
    },
    content: {
        padding: 20,
    },
};
export function AdCard(props) {
    return (

        <div className="card-deck ml-2 my-3" style={styles.adCard} {...props}>
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Price: {props.price}</p>
                </div>
            </div>
        </div>

    );
}

export function AdCard1(props) {
    return (
        <Wrapper>
            <div className="card-deck ml-2 my-3" style={styles.adCard} {...props}>
                <div className="card">
                    <img src={props.image} className="card-img-top" alt={props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Price: {props.price}</p>
                    </div>
                    {props.children}
                </div>
            </div>
        </Wrapper>
    );
}
