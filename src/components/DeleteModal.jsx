import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal(props) {
    const { showModal, handleDelete, toggleModal } = props;
    return (
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
            <Modal.Title>Delete Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
                Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;