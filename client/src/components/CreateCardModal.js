import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateCardForm from './CreateCardForm';
import React from 'react';
import Form from 'react-bootstrap/Form'




function AddCardModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>The correct answer is</Modal.Title>
        </Modal.Header>
        <Form>
        <Modal.Body>
      <CreateCardForm/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button type='submit' variant="primary">Save changes</Button>
        </Modal.Footer>
        </Form>
      </Modal.Dialog>
    </div>
  );
};

export default AddCardModal