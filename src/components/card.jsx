import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";



const Carddetails = (props) => {
    const navigate = useNavigate();



    return (

        <Card style={{ width: '18rem', border: "2px solid", margin: "10px" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={(e) => navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>

            </Card.Body>
        </Card>

    );



};

export default Carddetails;
