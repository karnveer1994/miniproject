import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CreateProjectModal(props) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [deliverDate, setDeliveryDate] = useState("");
  const [projectCost, setProjectCost] = useState("");
  const [projectCostError, setProjectCostError] = useState("");
  const [cleverPer, setcleverPer] = useState("0.0");
  const [total, setTotal] = useState("0.0");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const titleCheck = title.length > 80;
    const descriptionCheck = description.length > 100;
    const projectCostCheck = !(100 <= projectCost ||  projectCost >= 100000);

    if(titleCheck){
      setTitleError('max length exceed from 80')
    }
    if(descriptionCheck) {
      setDescriptionError('max length exceed from 100')
    }
    if(projectCostCheck){
      setProjectCostError('project cost have to be in range 100-100000')
    }

    if(!(titleCheck || descriptionCheck || projectCostCheck)) {
      setTitleError('');
      setDescriptionError('');
      setProjectCostError('');

      const DataToBeSended = {
        name: title,
        summary: description,
        date: deliverDate,
        cost: projectCost, 
      }
      props.postProjectData(DataToBeSended);
    }
  }

  const onChangeCost = (e) => {
    const cost = Number(e.target.value);
    setProjectCost(cost);
    const per = (0.2 * cost).toFixed(2);
    setcleverPer(per);
    const totalCost = Number(per) + cost
    setTotal(totalCost);
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
            <Form.Control type="text" name="name" onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            {titleError.length > 0 && <span className="error">{titleError}</span>}
            <br />
            <Form.Control as="textarea" name="summary" type="text" onChange={e => setDescription(e.target.value)} placeholder="Description" required/>
            {descriptionError.length > 0 && <span className="error">{descriptionError}</span>}
            <br />
            <Form.Control type="date" name="date" startDate={new Date()} onChange={e => setDeliveryDate(e.target.value)} placeholder="Deliver date" required />
            <br />
            <Form.Control type="number" name="cost" onChange={onChangeCost} placeholder="Project cost" required/>
            {projectCostError.length > 0 && <span className="error">{projectCostError}</span>}
            <br />
            <Row>
              <Col xs={7}>
                <Form.Label>
                  CleverX transaction fees (20%)
                </Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control disabled type="transFees" placeholder={`$${cleverPer}`} />
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
                <Form.Control disabled type="totalAmount" placeholder={`$${total}`} />
              </Col>
              <Col sm={2}>
              </Col>
            </Row>
        </Form.Group>
        <br/>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 4 }}>
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