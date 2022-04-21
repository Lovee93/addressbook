import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal(props) {
    const { showModal, handleDelete, toggleModal } = props;
    return (
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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