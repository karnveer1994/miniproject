import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CreateProjectModal(props) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [deliverDate, setDeliveryDate] = useState("");
  const [projectCost, setProjectCost] = useState("");
  const [projectCostError, setProjectCostError] = useState("");
  const [cleverPer, setcleverPer] = useState(0.00);
  const [total, setTotal] = useState(0.00);

  const handleSubmit = evt => {
    evt.preventDefault();
    const titleCheck = title.length > 80;
    const descriptionCheck = description.length > 100;
    const projectCostCheck = !(100 <= projectCost || projectCost >= 100000);

    if (titleCheck) {
      setTitleError("max length exceed from 80");
    }
    if (descriptionCheck) {
      setDescriptionError("max length exceed from 100");
    }
    if (projectCostCheck) {
      setProjectCostError("project cost have to be in range 100-100000");
    }

    if (!(titleCheck || descriptionCheck || projectCostCheck)) {
      setTitleError("");
      setDescriptionError("");
      setProjectCostError("");

      const DataToBeSended = {
        name: title,
        summary: description,
        date: deliverDate,
        cost: projectCost,
      };
      props.postProjectData(DataToBeSended);
    }
  };

  const onChangeCost = e => {
    const cost = Number(e.target.value);
    setProjectCost(cost);
    const per = 0.2 * cost;
    setcleverPer(per);
    const totalCost = Number(per) + cost;
    setTotal(totalCost);
  };

  return (
    <Modal centered {...props} aria-labelledby="contained-modal-title-vcenter">
      <Form onSubmit={handleSubmit} role="form">
        <Modal.Header closeButton>
          <Modal.Title className='modalTitle' id="contained-modal-title-vcenter">
            Create Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid commonPadding">
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            {titleError.length > 0 && (
              <span className="error">{titleError}</span>
            )}
            <br />
            <Form.Control
              as="textarea"
              name="summary"
              type="text"
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            {descriptionError.length > 0 && (
              <span className="error">{descriptionError}</span>
            )}
            <br />
            <Form.Control
              type="date"
              name="date"
              onChange={e => setDeliveryDate(e.target.value)}
              placeholder="Deliver date"
              required
            />
            <br />
            <Form.Control
              type="number"
              name="cost"
              onChange={onChangeCost}
              placeholder="Project cost"
              required
            />
            {projectCostError.length > 0 && (
              <span className="error">{projectCostError}</span>
            )}
            <br />
            <Row className='marginAuto'>
              <Col className='marginAuto' xs={7}>
                <Form.Label className='fontColorGray'>CleverX transaction fees (20%)</Form.Label>
              </Col>
              <Col sm={2}></Col>
              <Col className='marginAuto alignRight' sm={3}>
                <span className='fontColorGray'>${cleverPer.toFixed(2)}</span>
              </Col>
            </Row>
            <br />
            <Row className='marginAuto'>
              <Col xs={7} className='marginAuto'>
                <Form.Label className='fontColorGray'>Total Amount in $USD</Form.Label>
              </Col>
              <Col sm={2}></Col>
              <Col sm={3} className='marginAuto alignRight'>
                <span className='fontColorGray'>${total.toFixed(2)}</span>
              </Col>
            </Row>
          </Form.Group>
          <br />
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button type="submit" className='projectButton'>Create Project</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CreateProjectModal;
