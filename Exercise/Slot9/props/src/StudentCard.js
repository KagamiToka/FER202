import React from "react";
import { Card, Button, CardImg } from "react-bootstrap";

const StudentCard = ({student}) => {
    return(
        <Card style={{width: "18rem"}} className="mb-4">
            <Card.Img 
                style={{height: "300px"}}
                variant="top"
                src={student.avatar}
                alt={`${student.name}'s avartar`}
            />
            <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>Age: {student.age}</Card.Text>
                <Button variant="primary">Edit</Button>
            </Card.Body>
        </Card>
    );
};
export default StudentCard;