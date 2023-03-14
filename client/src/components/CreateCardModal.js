import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function addCardModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>The correct answer is</Modal.Title>
        </Modal.Header>

        <Modal.Body>
      <CreateCardForm/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default addCardModal;