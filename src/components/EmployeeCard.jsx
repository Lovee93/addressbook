import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function EmployeeCard(props) {
    const { employees, toggleModal } = props; 
    const link = "https://jsonplaceholder.typicode.com/users/";
    //console.log(showModal)
    return (
        <Container>
            <Row className='justify-content-center'>
                {
                    employees !== "" && employees.map(employee => 
                    <Col key={employee.id} className="col-auto">
                        <Card>
                            <Card.Body>
                                <Card.Title>{employee.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{employee.company.name}</Card.Subtitle>
                                <Card.Text>{employee.company.catchPhrase}</Card.Text>
                                <Card.Text>{employee.phone}</Card.Text>
                                <Button className="text-right m-2" href={`${link}${employee.id}`} target="_blank">View</Button>
                                <Button className="text-right m-2" variant="danger" onClick={() => toggleModal(employee.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container> 
    );
}

export default EmployeeCard;