import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CreateProjectModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deliverDate, setDeliveryDate] = useState("");
  const [projectCost, setProjectCost] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const DataToBeSended = {
      name: title,
      summary: description,
      date: deliverDate,
      cost: projectCost, 
    }
    props.postProjectData(DataToBeSended);
  }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Form onSubmit={handleSubmit} role="form">
        <Form.Group>
            <Form.Control type="text" name="name" onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <br />
            <Form.Control as="textarea" name="summary" type="text" onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <br />
            <Form.Control type="date" name="date" onChange={e => setDeliveryDate(e.target.value)} placeholder="Deliver date" />
            <br />
            <Form.Control type="text" name="cost" onChange={e => setProjectCost(e.target.value)} placeholder="Project cost" />
            <br />
            <Row>
              <Col xs={7}>
                <Form.Label>
                  CleverX transaction fees (20%)
                </Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control disabled type="transFees" placeholder="$0.0" />
              </Col>
              <Col sm={2}>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={7}>
                <Form.Label>
                  Total Amount in $USD  
                </Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control disabled type="totalAmount" placeholder="$0.0" />
              </Col>
              <Col sm={2}>
              </Col>
            </Row>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Create Project</Button>
          </Col>
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateProjectModal;