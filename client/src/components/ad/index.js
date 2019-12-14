import React from "react";
const styles = {
    adCard: {
        margin: "33%",
        background: "white"
    },
    headName:{
        "text-align": "center"
    },
    content:{
        padding: 20,
    }
};
function AdCard(props) {
    return(
<div className ="card">
    <div className ="img-container">
        <img alt= {props.name} src= {props.image}/>
    </div>
    <div className= "content">
        <ul>
            <li styles={styles.headName}>
                <strong>Name:</strong> {props.name}
            </li>
            <li styles={styles.content}>
                <strong>Price:</strong>{props.price}
            </li>
        </ul>
    </div>
</div>
    );
}

export default AdCard;