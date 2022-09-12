import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function ProductCard(props){
    return (
    <Card>
    <Link to="NeoRhythm">{props.info.image}</Link>
        <Card.Body>
            <Card.Title>{props.info.title}</Card.Title>
            <Card.Text>{props.info.price}</Card.Text>
        </Card.Body>
    </Card>
    )
}

export default ProductCard;
