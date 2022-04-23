import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

function AddModal(props) {
    const { showModal, toggleModal, handleAdd } = props;
    const [employeeName, setEmployeeName] = useState("");
    const [employeeCompany, setEmployeeCompany] = useState("");
    const [employeePhone, setEmployeePhone] = useState("");
    const [employeeCatchphrase, setEmployeeCatchphrase] = useState("");
    
    return (
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
            <Modal.Title>Add new employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='p-2'>
                    <Col className="col-auto">Name: </Col>
                    <Col><input className='form-control' type='text' onChange={(e)=>setEmployeeName(e.target.value)} /></Col>
                </Row>
                <Row className='p-2'>
                    <Col className="col-auto">Company Name: </Col>
                    <Col><input className='form-control' type='text' onChange={(e)=>setEmployeeCompany(e.target.value)}/></Col>
                </Row>
                <Row className='p-2'>
                    <Col className="col-auto">Catchphrase: </Col>
                    <Col><input className='form-control' type='text' onChange={(e)=>setEmployeeCatchphrase(e.target.value)} /></Col>
                </Row>
                <Row className='p-2'>
                    <Col className="col-auto">Phone: </Col>
                    <Col><input className='form-control' type='number' onChange={(e)=>setEmployeePhone(e.target.value)} /></Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
                Cancel
            </Button>
            <Button variant="success" onClick={()=>handleAdd(employeeName, employeeCompany, employeeCatchphrase, employeePhone)}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddModal;